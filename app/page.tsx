import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Tools from "@/components/Tools";
import Results from "@/components/Results";
import Framework from "@/components/Framework";
import WhyHireMe from "@/components/WhyHireMe";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Results />

      {/* Sales Playbook */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-green-400">
            Conversation Library
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Sales Playbook.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            Real appointment-setting conversations, objection-handling
            frameworks, qualification questions, and booking flows I use to
            approach sales conversations.
          </p>

          <a
            href="/sales-playbook"
            className="mt-8 inline-flex items-center rounded-full bg-green-500 px-7 py-3 font-semibold text-black transition hover:bg-green-400"
          >
            Explore Sales Playbook →
          </a>
        </div>
      </section>

      <Journey />
      <Framework />
      <WhyHireMe />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}
