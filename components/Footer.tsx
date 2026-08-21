export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

        <div>
          <h3 className="text-2xl font-bold">
            Shashwat Singh Rana
          </h3>

          <p className="mt-2 text-gray-400">
            Appointment Setter • Sales Professional
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a
            href="#results"
            className="transition hover:text-green-400"
          >
            Results
          </a>

          <a
            href="#journey"
            className="transition hover:text-green-400"
          >
            Journey
          </a>

          <a
            href="#framework"
            className="transition hover:text-green-400"
          >
            Framework
          </a>

          <a
            href="#contact"
            className="transition hover:text-green-400"
          >
            Contact
          </a>
        </div>

      </div>

      <div className="mt-10 border-t border-white/10 pt-6 flex items-center justify-between text-sm text-gray-500">
  <p>
    © 2026 Shashwat Singh Rana. All rights reserved.
  </p>

  <a
    href="https://www.linkedin.com/in/shashwat-singh-rana-29255574"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-gray-400 transition hover:border-green-400 hover:text-green-400"
  >
    in
  </a>
</div>
    </footer>
  );
}
