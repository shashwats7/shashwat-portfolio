export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-6 py-28 text-center text-white"
    >
      <div className="mx-auto max-w-4xl">

        <p className="uppercase tracking-[0.3em] text-green-400">
          Let&apos;s Connect
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Let&apos;s Build Something Great Together.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Looking for someone who can represent your business professionally,
          build genuine relationships, and turn conversations into opportunities?
          I&apos;d love to connect.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <a
            href="mailto:YOUR_EMAIL"
            className="rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Schedule an Interview
          </a>

          <a
            href="/resume.pdf"
            className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-green-400"
          >
            Download Résumé
          </a>

        </div>

      </div>
    </section>
  );
}
