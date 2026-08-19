export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 uppercase tracking-[0.3em] text-green-400">
          Journey
        </p>

        <h2 className="mb-14 text-4xl font-bold">
          From Building Relationships
          <br />
          To Driving Revenue.
        </h2>

        <div className="space-y-10">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <span className="text-green-400 font-semibold">
              JM Knits
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              Relationship-Driven B2B Sales
            </h3>

            <p className="mt-6 text-gray-300 leading-8">
              Worked directly with textile manufacturers, garment exporters,
              buying houses and business owners to understand sourcing
              requirements, negotiate pricing, manage long-term client
              relationships and generate recurring business.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <div className="rounded-2xl bg-black p-6 border border-green-500/20">
                <h4 className="text-3xl font-bold text-green-400">$900K+</h4>
                <p className="mt-2 text-gray-400">
                  Annual Accounts Managed
                </p>
              </div>

              <div className="rounded-2xl bg-black p-6 border border-green-500/20">
                <h4 className="text-3xl font-bold text-green-400">200+</h4>
                <p className="mt-2 text-gray-400">
                  B2B Customers
                </p>
              </div>

              <div className="rounded-2xl bg-black p-6 border border-green-500/20">
                <h4 className="text-3xl font-bold text-green-400">25-30</h4>
                <p className="mt-2 text-gray-400">
                  Active Business Clients
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
