export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 2, 2026</p>

      <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">1. Who we are</h2>
          <p>CheckThatMessage is operated by Rody Oversloot, based in the Netherlands. You can contact us at <a href="mailto:rodyoversloot@gmail.com" className="text-green-600 underline">rodyoversloot@gmail.com</a>.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">2. What data we collect</h2>
          <p className="mb-2">We collect only what is strictly necessary to provide the service:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Message content</strong> - the text you paste into the checker. This is sent to our AI provider (Anthropic) for analysis and is not stored by us after the response is returned.</li>
            <li><strong>Payment information</strong> - handled entirely by Stripe. We never see or store your card details.</li>
            <li><strong>Technical data</strong> - standard server logs (IP address, browser type, timestamps) retained for up to 30 days for security purposes.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">3. How we use your data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To analyse the message you submitted and return a result</li>
            <li>To process payment and deliver the full report</li>
            <li>To maintain the security and performance of our service</li>
          </ul>
          <p className="mt-2">We do not sell, share, or use your data for advertising purposes.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">4. Third-party services</h2>
          <p className="mb-2">We use the following third-party services:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Anthropic</strong> - AI analysis provider. Your message is sent to Anthropic's API to generate the scam analysis. Anthropic's privacy policy applies: <a href="https://www.anthropic.com/privacy" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a></li>
            <li><strong>Stripe</strong> - payment processor. Stripe's privacy policy applies: <a href="https://stripe.com/privacy" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
            <li><strong>Vercel</strong> - hosting provider. Vercel's privacy policy applies: <a href="https://vercel.com/legal/privacy-policy" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a></li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">5. Message storage</h2>
          <p>Messages you submit are processed in real-time and are not stored in a database by us. The full analysis result is temporarily encoded in the payment session URL to deliver your report, and is not retained after that.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">6. Cookies</h2>
          <p>We do not use tracking or advertising cookies. Stripe may set cookies as part of the payment process. By using this site you accept the use of these essential cookies.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">7. Your rights (GDPR)</h2>
          <p className="mb-2">If you are located in the European Economic Area, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact us at <a href="mailto:rodyoversloot@gmail.com" className="text-green-600 underline">rodyoversloot@gmail.com</a>.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">8. Changes to this policy</h2>
          <p>We may update this policy from time to time. The current version will always be available at this URL.</p>
        </section>

      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 flex gap-4 text-sm text-gray-400">
        <a href="/terms" className="hover:text-gray-600">Terms of Service</a>
        <a href="/disclaimer" className="hover:text-gray-600">Disclaimer</a>
        <a href="/refund" className="hover:text-gray-600">Refund Policy</a>
        <a href="/" className="hover:text-gray-600 ml-auto">← Back to home</a>
      </div>
    </main>
  )
}
