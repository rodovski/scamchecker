import { notFound } from 'next/navigation'
import { seoPages } from '@/lib/seo-pages'
import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateStaticParams() {
  return seoPages.map(page => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = seoPages.find(p => p.slug === params.slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
  }
}

export default function CheckPage({ params }: { params: { slug: string } }) {
  const page = seoPages.find(p => p.slug === params.slug)
  if (!page) notFound()

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-4">
        <Link href="/" className="text-green-600 hover:text-green-700 text-sm">← Back to checker</Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{page.h1}</h1>
      <p className="text-gray-600 text-lg mb-8">{page.intro}</p>

      {/* CTA */}
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8 text-center">
        <p className="text-gray-800 font-semibold mb-3">Paste your message to check it now — free</p>
        <Link
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
        >
          Check this message →
        </Link>
      </div>

      {/* Example analysis */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="font-bold text-gray-900 text-lg mb-3">Example of this scam type</h2>
        <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 italic mb-4 border border-gray-200">
          {page.example}
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Why this is suspicious:</h3>
        <p className="text-gray-600 text-sm">{page.exampleAnalysis}</p>
      </div>

      {/* FAQ */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
      <div className="space-y-3 mb-8">
        {page.faq.map(item => (
          <details key={item.q} className="bg-white rounded-xl border border-gray-200 p-4">
            <summary className="font-medium text-gray-800 cursor-pointer">{item.q}</summary>
            <p className="text-gray-600 text-sm mt-2">{item.a}</p>
          </details>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-900 rounded-2xl p-6 text-center text-white">
        <p className="font-bold text-lg mb-2">Not sure about a message?</p>
        <p className="text-gray-400 text-sm mb-4">Check it now — free. Results in seconds.</p>
        <Link
          href="/"
          className="inline-block bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
        >
          Check any message free →
        </Link>
      </div>
    </main>
  )
}
