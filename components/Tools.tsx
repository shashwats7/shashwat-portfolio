export default function Tools() {
  const categories = [
    {
      title: "Sales",
      items: [
        "Lead Qualification",
        "Appointment Setting",
        "Customer Relationship Management",
        "Objection Handling",
        "Follow-up",
        "Pipeline Management",
      ],
    },
    {
      title: "Tools",
      items: [
        "Monday.com",
        "HubSpot",
        "Trello",
        "Mailchimp",
        "Google Workspace",
        "Microsoft Office",
        "Shopify",
        "Canva",
        "ChatGPT",
      ],
    },
  ];

  return (
    <section
      id="tools"
      className="bg-[#050505] py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <p className="uppercase tracking-[0.3em] text-green-400">
          Tech Stack & Sales Toolkit
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Built for Modern Sales.
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-8 text-2xl font-bold text-green-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-green-500/30 px-4 py-2 text-sm transition hover:border-green-400 hover:bg-green-500/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
