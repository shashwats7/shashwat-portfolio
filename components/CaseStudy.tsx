export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="bg-[#050505] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 uppercase tracking-[0.3em] text-green-400">
          Featured Case Study
        </p>

        <h2 className="mb-16 text-5xl font-bold">
          Building
          <span className="text-green-400"> The Hooked Store</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Challenge */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-6 text-4xl">🎯</div>

            <h3 className="text-2xl font-bold">
              Challenge
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Launch a premium apparel brand with almost no capital while
              competing against established ecommerce brands.
            </p>
          </div>

          {/* Actions */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <div className="mb-6 text-4xl">⚡</div>

            <h3 className="text-2xl font-bold">
              Actions
            </h3>

            <ul className="mt-5 space-y-4 text-gray-300">

              <li>✓ Built the Shopify store from scratch.</li>

              <li>✓ Designed apparel graphics.</li>

              <li>✓ Optimized product pages.</li>

              <li>✓ Managed customer support.</li>

              <li>✓ Managed order fulfillment.</li>

              <li>✓ Collaborated on Meta ad creatives.</li>

            </ul>

          </div>

          {/* Results */}

          <div className="rounded-3xl border border-green-500/40 bg-green-500/10 p-8">

            <div className="mb-6 text-4xl">📈</div>

            <h3 className="text-2xl font-bold">
              Results
            </h3>

            <div className="mt-6 space-y-6">

              <div>

                <h4 className="text-4xl font-bold text-green-400">
                  3 Months
                </h4>

                <p className="text-gray-300">
                  Reached profitability
                </p>

              </div>

              <div>

                <h4 className="text-4xl font-bold text-green-400">
                  200+
                </h4>

                <p className="text-gray-300">
                  Orders fulfilled
                </p>

              </div>

              <div>

                <h4 className="text-4xl font-bold text-green-400">
                  ₹50K+
                </h4>

                <p className="text-gray-300">
                  Monthly profit achieved
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}