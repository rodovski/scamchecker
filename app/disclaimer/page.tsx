export default function Disclaimer() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Disclaimer</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 2, 2026</p>

      <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">AI-based analysis - not a guarantee</h2>
          <p>CheckThatMessage uses artificial intelligence to assess whether a message may be a scam. All results are indicative only. The AI can and does make mistakes. A message flagged as a scam may be legitimate, and a message deemed safe may be fraudulent.</p>
          <p className="mt-2">Never rely solely on our analysis when making decisions about clicking links, sharing personal information, or sending money.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">Not legal or financial advice</h2>
          <p>Nothing on this website constitutes legal, financial, or professional advice of any kind. If you believe you have been the victim of fraud, contact your bank, the police, or a relevant authority directly.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">No liability for decisions made</h2>
          <p>CheckThatMessage and its operator (Rody Oversloot) accept no liability for any loss, damage, or harm resulting from actions taken - or not taken - based on the analysis provided by this service. You use the service entirely at your own risk.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">External links</h2>
          <p>Any links to third-party websites are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">Availability</h2>
          <p>We make no guarantee that the service will be available at all times. We reserve the right to modify, suspend, or discontinue the service at any time without notice.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">Contact</h2>
          <p>Questions? Contact us at <a href="mailto:rodyoversloot@gmail.com" className="text-green-600 underline">rodyoversloot@gmail.com</a>.</p>
        </section>

      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 flex gap-4 text-sm text-gray-400">
        <a href="/privacy" className="hover:text-gray-600">Privacy Policy</a>
        <a href="/terms" className="hover:text-gray-600">Terms of Service</a>
        <a href="/refund" className="hover:text-gray-600">Refund Policy</a>
        <a href="/" className="hover:text-gray-600 ml-auto">← Back to home</a>
      </div>
    </main>
  )
}
