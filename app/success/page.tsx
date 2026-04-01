'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

type FullReport = {
  verdict: 'LIKELY_SCAM' | 'UNSURE' | 'LIKELY_SAFE'
  riskScore: number
  scamType: string
  redFlags: string[]
  recommendedAction: string
  confidenceLevel: 'HIGH' | 'MEDIUM' | 'LOW'
  shortReason: string
  disclaimer: string
  message: string
  analysedAt: string
}

function SuccessContent() {
  const params = useSearchParams()
  const [report, setReport] = useState<FullReport | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const data = params.get('data')
    const stripeSession = params.get('session_id')

    if (!data || !stripeSession) {
      setError('Invalid report link.')
      return
    }

    try {
      const decoded = JSON.parse(Buffer.from(data, 'base64url').toString('utf-8'))
      setReport(decoded)
    } catch {
      setError('Could not load report. Please contact support.')
    }
  }, [params])

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  if (!report) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <p className="text-gray-500">Loading your report...</p>
      </div>
    )
  }

  const scoreColor = report.riskScore >= 70 ? 'text-red-600' : report.riskScore >= 40 ? 'text-orange-500' : 'text-green-600'
  const verdictLabel = {
    LIKELY_SCAM: 'â ï¸ Likely a Scam',
    UNSURE: 'ð¤ Suspicious',
    LIKELY_SAFE: 'â Looks Legitimate',
  }[report.verdict]

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <div className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full mb-3">
          â Payment confirmed â Full report unlocked
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Your CheckThatMessage Report</h1>
      </div>

      {/* Verdict banner */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-gray-900">{verdictLabel}</span>
          <div className="text-right">
            <div className={`text-4xl font-black ${scoreColor}`}>{report.riskScore}</div>
            <div className="text-xs text-gray-500">Risk Score / 100</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{report.shortReason}</p>
      </div>

      {/* Scam type */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
        <h2 className="font-semibold text-gray-900 mb-2">ð¯ Type of Scam</h2>
        <p className="text-gray-700 capitalize">{report.scamType}</p>
      </div>

      {/* Red flags */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
        <h2 className="font-semibold text-gray-900 mb-3">ð© Red Flags Identified</h2>
        {report.redFlags.length === 0 ? (
          <p className="text-gray-500 text-sm">No specific red flags identified.</p>
        ) : (
          <ul className="space-y-2">
            {report.redFlags.map((flag, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="text-red-500 flex-shrink-0">â</span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Recommended action */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
        <h2 className="font-semibold text-gray-900 mb-2">â What to Do</h2>
        <p className="text-gray-700 text-sm">{report.recommendedAction}</p>
      </div>

      {/* Confidence */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
        <h2 className="font-semibold text-gray-900 mb-2">ð Analysis Confidence</h2>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
            report.confidenceLevel === 'HIGH' ? 'bg-green-100 text-green-800' :
            report.confidenceLevel === 'MEDIUM' ? 'bg-orange-100 text-orange-800' :
            'bg-gray-100 text-gray-700'
          }`}>
            {report.confidenceLevel}
          </span>
          <span className="text-gray-500 text-sm">confidence in this assessment</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-500 border border-gray-200">
        {report.disclaimer}
      </div>

      <div className="mt-6 text-center">
        <a href="/" className="text-green-600 hover:text-green-700 text-sm font-medium">
          â Check another message
        </a>
      </div>
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
