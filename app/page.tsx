'use client'

import { useState } from 'react'

type FreeResult = {
  verdict: 'LIKELY_SCAM' | 'UNSURE' | 'LIKELY_SAFE'
  riskCount: number
  shortReason: string
  sessionId: string
}

export default function Home() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<FreeResult | null>(null)
  const [error, setError] = useState('')
  const [checkingOut, setCheckingOut] = useState(false)

  async function handleCheck() {
    if (!message.trim() || message.trim().length < 10) {
      setError('Please paste a message of at least 10 characters.')
      return
    }
    setError('')
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Analysis failed')
      setResult(data)
    } catch (e: any) {
      setError(e.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleGetReport() {
    if (!result) return
    setCheckingOut(true)
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: result.sessionId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      window.location.href = data.url
    } catch (e: any) {
      setError(e.message || 'Could not start payment. Please try again.')
      setCheckingOut(false)
    }
  }

  const verdictConfig = {
    LIKELY_SCAM: {
      label: 'â ï¸ Likely a Scam',
      bg: 'bg-red-50',
      border: 'border-red-300',
      text: 'text-red-700',
      badge: 'bg-red-100 text-red-800',
    },
    UNSURE: {
      label: 'ð¤ Suspicious â Proceed with Caution',
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      text: 'text-orange-700',
      badge: 'bg-orange-100 text-orange-800',
    },
    LIKELY_SAFE: {
      label: 'â Looks Legitimate',
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-700',
      badge: 'bg-green-100 text-green-800',
    },
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Not sure if that message is a scam?
        </h1>
        <p className="text-gray-600 text-lg">
          Paste it below. We'll analyse it instantly â free.
        </p>
      </div>

      {/* Input */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Paste the message here
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          rows={6}
          placeholder="e.g. 'Congratulations! You've won a â¬500 gift card. Click here to claim...'"
          value={message}
          onChange={e => setMessage(e.target.value)}
          disabled={loading}
        />
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        <button
          onClick={handleCheck}
          disabled={loading || !message.trim()}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl transition-colors text-base"
        >
          {loading ? 'ð Analysing...' : 'Check this message â it\'s free'}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className={`mt-6 rounded-2xl border-2 p-6 ${verdictConfig[result.verdict].bg} ${verdictConfig[result.verdict].border}`}>
          <div className="flex items-center justify-between mb-3">
            <span className={`text-lg font-bold ${verdictConfig[result.verdict].text}`}>
              {verdictConfig[result.verdict].label}
            </span>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${verdictConfig[result.verdict].badge}`}>
              {result.riskCount} risk signal{result.riskCount !== 1 ? 's' : ''} found
            </span>
          </div>
          <p className={`text-sm ${verdictConfig[result.verdict].text} mb-5`}>
            {result.shortReason}
          </p>

          {/* Paywall */}
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <p className="font-semibold text-gray-900 mb-1">ð Get the full breakdown</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>â Risk score (0â100)</li>
              <li>â Type of scam identified</li>
              <li>â Exact red flags explained</li>
              <li>â What to do next</li>
              <li>â Confidence level of analysis</li>
            </ul>
            <button
              onClick={handleGetReport}
              disabled={checkingOut}
              className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {checkingOut ? 'Redirecting to payment...' : 'Get full report â â¬9'}
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">Secure payment via Stripe Â· Instant delivery</p>
          </div>
        </div>
      )}

      {/* Trust signals */}
      <div className="mt-10 grid grid-cols-3 gap-4 text-center">
        {[
          { icon: 'â¡', title: 'Instant', sub: 'Results in seconds' },
          { icon: 'ð', title: 'Private', sub: 'Messages not stored' },
          { icon: 'ð¤', title: 'AI-powered', sub: 'Advanced detection' },
        ].map(item => (
          <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
            <div className="text-gray-500 text-xs">{item.sub}</div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Common questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'How does CheckThatMessage work?',
              a: 'We use advanced AI to analyse the language, structure, and patterns of your message against thousands of known scam techniques.',
            },
            {
              q: 'Is my message stored?',
              a: 'No. Messages are processed in real-time and immediately discarded. We never store or share your data.',
            },
            {
              q: 'What types of scams can you detect?',
              a: 'Phishing, romance scams, investment fraud, fake delivery notifications, WhatsApp impersonation, lottery scams, and more.',
            },
            {
              q: 'Is the free check accurate?',
              a: 'The free check gives you a reliable verdict and risk signal count. The paid report adds full detail, so you understand exactly why something is suspicious.',
            },
          ].map(item => (
            <details key={item.q} className="bg-white rounded-xl border border-gray-200 p-4">
              <summary className="font-medium text-gray-800 cursor-pointer">{item.q}</summary>
              <p className="text-gray-600 text-sm mt-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  )
}
