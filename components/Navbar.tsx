export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-6 py-4 backdrop-blur-md">
        <h1 className="text-xl font-bold tracking-wide text-white">
          Shashwat<span className="text-green-400">.</span>
        </h1>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#results" className="hover:text-green-400 transition">
            Results
          </a>

          <a href="#journey" className="hover:text-green-400 transition">
            Journey
          </a>

          <a href="#case-study" className="hover:text-green-400 transition">
            Case Study
          </a>

          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}