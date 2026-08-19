export default function Results() {
  const stats = [
    {
      value: "$900K++",
      label: "Annual Accounts Managed",
    },
    {
      value: "200+",
      label: "B2B Customers Acquired",
    },
    {
      value: "25-30",
      label: "Active Business Clients Managed",
    },
    {
      value: "7+",
      label: "Years of Sales Experience",
    },
  ];

  return (
    <section
      id="results"
      className="bg-[#050505] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="uppercase tracking-[0.3em] text-green-400">
          Results That Matter
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Proven Performance.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          My experience spans B2B sales, customer relationship management,
          and business development, with a consistent focus on building
          trust and driving measurable revenue.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-400 hover:bg-white/10"
            >
              <h3 className="text-5xl font-bold text-green-400">
                {stat.value}
              </h3>

              <p className="mt-4 text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
