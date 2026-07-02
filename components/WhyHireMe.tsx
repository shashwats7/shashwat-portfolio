export default function WhyHireMe() {
  const points = [
    "I represent your business as if it were my own.",
    "I focus on building trust before pitching.",
    "I communicate professionally and consistently.",
    "I qualify opportunities instead of chasing appointments.",
    "I understand both traditional B2B sales and ecommerce.",
    "I thrive in remote, fast-moving teams.",
  ];

  return (
    <section
      id="why"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <p className="uppercase tracking-[0.3em] text-green-400">
          Why Founders Hire Me
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          More Than An Appointment Setter.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          My goal isn't just to book meetings.
          It's to create meaningful conversations that become
          long-term business relationships.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {points.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-green-400 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl text-green-400">✓</div>

                <p className="text-lg text-gray-300">
                  {point}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}