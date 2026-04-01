import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CheckThatMessage â Is This Message a Scam?',
  description: 'Paste any suspicious message and find out instantly if it\'s a scam. Free basic check, detailed paid report.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-2xl mx-auto flex items-center gap-2">
            <span className="text-2xl">ð</span>
            <span className="font-bold text-gray-900 text-lg">CheckThatMessage</span>
            <span className="text-sm text-gray-500 ml-1">â Is this message real or fake?</span>
          </div>
        </header>
        {children}
        <footer className="mt-16 py-8 text-center text-xs text-gray-400">
          <p>CheckThatMessage uses AI to help detect suspicious messages. Results are indicative â always use your own judgment.</p>
          <p className="mt-1">Â© {new Date().getFullYear()} CheckThatMessage Â· Not legal advice</p>
        </footer>
      </body>
    </html>
  )
}
