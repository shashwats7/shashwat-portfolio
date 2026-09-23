export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

        <div>
          <h3 className="text-2xl font-bold">
            Shashwat Singh Rana (Shash)
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
    © 2026 Shash. All rights reserved.
  </p>

  <div className="flex items-center gap-3">
  <a
    href="https://www.linkedin.com/in/shashwat-singh-rana-29255574"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition hover:border-green-400 hover:text-green-400"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 9h3.56v11.45H3.56V9z" />
    </svg>
  </a>

  <a
    href="https://www.instagram.com/settershash"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition hover:border-green-400 hover:text-green-400"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  </a>
</div>
</div>
    </footer>
  );
}
