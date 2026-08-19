export default function Framework() {
  const steps = [
    {
      title: "01. Understand First",
      text: "Before discussing any solution, I understand the client's goals, challenges, and what success looks like for them.",
    },
    {
      title: "02. Ask Better Questions",
      text: "Great conversations reveal real pain points. I focus on listening more than talking.",
    },
    {
      title: "03. Qualify the Opportunity",
      text: "I identify the prospect's needs, goals, urgency, and fit so time is focused on opportunities that genuinely make sense.",
    },
    {
      title: "04. Build Trust",
      text: "People don't buy because they're pressured. They move forward when they trust the person they're speaking with.",
    },
    {
      title: "05. Guide, Don't Push",
      text: "I believe the right solution should feel like a natural next step. My job is to guide the conversation, not force the outcome.",
    },
    {
      title: "06. Follow Up With Purpose",
      text: "Consistent, relevant follow-up keeps good opportunities moving forward while respecting the prospect's time and decision process.",
    },
  ];

  return (
    <section
      id="framework"
      className="bg-[#050505] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <p className="uppercase tracking-[0.3em] text-green-400">
          My Sales Framework
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          The Way I Sell.
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-green-400 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-green-400">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
