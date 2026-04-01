import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { randomUUID } from 'crypto'

// In-memory store for sessions (in production, use a database or Redis)
// Vercel's serverless functions are stateless, so we use a simple approach:
// The full analysis is included in the sessionId as a base64 encoded string
// This avoids needing a database for the MVP

const client = new Anthropic({ apiKey: process.env.ANTHROPC_API_KEY })

const SYSTEM_PROMPT = `You are an expert scam detection analyst with deep knowledge of:
- Phishing attacks (email, SMS, WhatsApp)
- Romance scams and social engineering
- Investment fraud (crypto, stocks, "guaranteed returns")
- Fake delivery notifications (DHL, PostNL, UPS)
- Lottery and prize scams
- Bank and identity fraud
- Impersonation of companies, government agencies, or individuals

Analyse messages with extreme precision. Look for:
1. Urgency language ("act now", "limited time", "your account will be closed")
2. Unsolicited prizes, gifts, or winnings
3. Requests for personal information, passwords, or payment
4. Suspicious links or unusual domains
5. Poor grammar or unusual phrasing for the claimed sender
6. Emotional manipulation or fear tactics
7. Requests to keep things secret or bypass normal processes
8. Unrealistic promises of money or rewards
9. Impersonation patterns (fake banks, government, couriers)
10. Unknown senders asking for urgent action

IMPORTANT: Always add a disclaimer that this is an AI assessment, not a guarantee.`

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message too short' }, { status: 400 })
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message too long (max 5000 characters)' }, { status: 400 })
    }

    const response = await client.messages.create({
            model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Analyse this message for scam indicators. Respond ONLY with valid JSON (no markdown, no explanation outside JSON).

Message to analyse:
"""
${message.trim()}
"""

Respond with this exact JSON structure:
{
  "verdict": "LIKELY_SCAM" | "UNSURE" | "LIKELY_SAFE",
  "riskCount": <number 0-10>,
  "shortReason": "<one sentence, max 120 chars, factual>",
  "riskScore": <number 0-100>,
  "scamType": "<type of scam or 'none detected'>",
  "redFlags": ["<flag 1>", "<flag 2>", "<flag 3>"],
  "recommendedAction": "<what the person should do>",
  "confidenceLevel": "HIGH" | "MEDIUM" | "LOW",
  "disclaimer": "This is an AI-based assessment and should not be taken as a guarantee. When in doubt, contact the alleged sender directly through official channels."
}`
        }
      ]
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''

    let parsed
    try {
      // Remove any markdown code blocks if present
      const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      parsed = JSON.parse(cleaned)
    } catch {
      return NextResponse.json({ error: 'Analysis failed, please try again' }, { status: 500 })
    }

    // Create a session ID that encodes the full result (base64) for retrieval after payment
    // In production, store this in a database. For MVP, we encode it.
    const fullData = {
      ...parsed,
      message: message.substring(0, 200) + (message.length > 200 ? '...' : ''),
      analysedAt: new Date().toISOString(),
    }
    const sessionId = Buffer.from(JSON.stringify(fullData)).toString('base64url')

    return NextResponse.json({
      verdict: parsed.verdict,
      riskCount: parsed.riskCount,
      shortReason: parsed.shortReason,
      sessionId,
    })
  } catch (error: any) {
    console.error('Analyze error:', error)
    return NextResponse.json({ error: 'Analysis failed. Please try again.' }, { status: 500 })
  }
}
