export default function TermsOfService() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 2, 2026</p>

      <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">1. Acceptance of terms</h2>
          <p>By using CheckThatMessage (checkthatmessage.com), you agree to these Terms of Service. If you do not agree, please do not use the service. The service is operated by Rody Oversloot, Netherlands.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">2. What the service does</h2>
          <p>CheckThatMessage uses artificial intelligence to analyse text messages submitted by users and assess the likelihood that they are scams or fraudulent communications. The service provides an indicative verdict - not a definitive determination.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">3. No guarantee of accuracy</h2>
          <p>The AI analysis is provided for informational purposes only. CheckThatMessage does not guarantee that any message flagged as a scam is actually fraudulent, or that any message deemed safe is genuinely legitimate. You must use your own judgment before taking action based on our analysis.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">4. Acceptable use</h2>
          <p className="mb-2">You agree not to use CheckThatMessage to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Submit messages containing personal data of third parties without their consent</li>
            <li>Attempt to reverse-engineer, scrape, or abuse the service</li>
            <li>Use the service for any illegal purpose</li>
            <li>Submit content that violates applicable law</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">5. Paid reports</h2>
          <p>The full analysis report is available for purchase. Payment is processed securely by Stripe. Upon successful payment, the full report is delivered immediately. Prices are subject to change without notice.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">6. Intellectual property</h2>
          <p>All content, design, and functionality of CheckThatMessage is owned by Rody Oversloot. You may not reproduce or redistribute any part of the service without written permission.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">7. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, CheckThatMessage and its operator shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the service or reliance on any analysis produced. The service is provided "as is" without warranty of any kind.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">8. Third-party services</h2>
          <p>CheckThatMessage uses Anthropic's AI models and Stripe for payments. Use of these third-party services is subject to their respective terms and policies.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">9. Governing law</h2>
          <p>These terms are governed by the laws of the Netherlands. Any disputes shall be subject to the exclusive jurisdiction of Dutch courts.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">10. Changes to these terms</h2>
          <p>We reserve the right to update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 text-base mb-2">11. Contact</h2>
          <p>Questions about these terms? Contact us at <a href="mailto:rodyoversloot@gmail.com" className="text-green-600 underline">rodyoversloot@gmail.com</a>.</p>
        </section>

      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 flex gap-4 text-sm text-gray-400">
        <a href="/privacy" className="hover:text-gray-600">Privacy Policy</a>
        <a href="/disclaimer" className="hover:text-gray-600">Disclaimer</a>
        <a href="/refund" className="hover:text-gray-600">Refund Policy</a>
        <a href="/" className="hover:text-gray-600 ml-auto">← Back to home</a>
      </div>
    </main>
  )
}
