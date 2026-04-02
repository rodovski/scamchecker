export default function RefundPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 2, 2026</p>

      <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">Digital product - immediate delivery</h2>
          <p>CheckThatMessage sells digital reports that are generated and delivered immediately upon payment. Because the report is produced and delivered at the moment of purchase, it is a digital product consumed instantly.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">Right of withdrawal (EU consumers)</h2>
          <p>Under EU consumer law, you normally have 14 days to withdraw from a digital purchase. However, by proceeding with payment you explicitly consent to the immediate delivery of the digital report and acknowledge that you lose your right of withdrawal once the report has been delivered.</p>
          <p className="mt-2">This is in accordance with Article 16(m) of the EU Consumer Rights Directive.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">When we do offer refunds</h2>
          <p className="mb-2">We will issue a full refund if:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You were charged but never received the report due to a technical error on our side</li>
            <li>You were charged more than once for the same analysis</li>
          </ul>
          <p className="mt-2">We do not offer refunds on the grounds that you disagree with the verdict, as AI-based analysis is inherently probabilistic and this limitation is clearly stated before purchase.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">How to request a refund</h2>
          <p>Email us at <a href="mailto:rodyoversloot@gmail.com" className="text-green-600 underline">rodyoversloot@gmail.com</a> with the subject line "Refund Request" and include your payment confirmation. We aim to respond within 2 business days.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">Payment processor</h2>
          <p>All payments are handled by Stripe. Approved refunds are returned to your original payment method and typically appear within 5-10 business days depending on your bank.</p>
        </section>

      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 flex gap-4 text-sm text-gray-400">
        <a href="/privacy" className="hover:text-gray-600">Privacy Policy</a>
        <a href="/terms" className="hover:text-gray-600">Terms of Service</a>
        <a href="/disclaimer" className="hover:text-gray-600">Disclaimer</a>
        <a href="/" className="hover:text-gray-600 ml-auto">← Back to home</a>
      </div>
    </main>
  )
}
