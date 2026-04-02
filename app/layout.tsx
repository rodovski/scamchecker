import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CheckThatMessage - Is This Message a Scam?',
  description: 'Paste any suspicious message and find out instantly if it\'s a scam. Free basic check, detailed paid report.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-2xl mx-auto flex items-center gap-2">
            <span className="text-2xl">🔍</span>
            <span className="font-bold text-gray-900 text-lg">CheckThatMessage</span>
            <span className="text-sm text-gray-500 ml-1">- Is this message real or fake?</span>
          </div>
        </header>
        {children}
        <footer className="mt-16 py-8 border-t border-gray-200 text-center text-xs text-gray-400">
          <p>CheckThatMessage uses AI to help detect suspicious messages. Results are indicative - always use your own judgment.</p>
          <p className="mt-1">© {new Date().getFullYear()} CheckThatMessage · Not legal advice</p>
          <div className="mt-3 flex justify-center gap-4">
            <a href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</a>
            <a href="/disclaimer" className="hover:text-gray-600 transition-colors">Disclaimer</a>
            <a href="/refund" className="hover:text-gray-600 transition-colors">Refund Policy</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
