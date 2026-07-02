export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-black px-6 pt-32">
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row">
        
        {/* Left Side */}
        <div className="max-w-2xl">

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            Available for Remote Opportunities
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Build Trust.
            <br />
            Book Appointments.
            <br />
            <span className="text-green-400">Drive Growth.</span>
          </h1>

          <h2 className="mt-8 text-3xl font-bold">
            Shashwat Singh Rana
          </h2>

          <p className="mt-3 text-xl text-green-400">
            Appointment Setter
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Building relationships that become revenue.
            I help businesses qualify leads, create meaningful conversations,
            and turn prospects into qualified opportunities through
            relationship-first communication.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-green-400">
              View My Experience
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-green-400 hover:text-green-400">
              Let's Talk
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="absolute inset-0 rounded-[40px] bg-green-500/20 blur-3xl" />

          <img
            src="/profile.png"
            alt="Shashwat Singh Rana"
            className="relative w-[380px] rounded-[32px] border border-white/10"
          />

        </div>

      </div>
    </section>
  );
}