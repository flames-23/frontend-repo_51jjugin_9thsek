import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0B1020] via-[#0A0F1A] to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-40 text-left sm:pt-44 md:pt-48">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Open to opportunities
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Building sleek, fast, and modern experiences.
        </h1>
        <p className="max-w-xl text-base text-white/70 sm:text-lg">
          I craft responsive web apps with delightful interactions — optimized for mobile and desktop, inspired by the calm of modern editors.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="rounded-md bg-gradient-to-tr from-cyan-500 to-blue-500 px-5 py-2.5 text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
            View Projects
          </a>
          <a href="#contact" className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-white/90 backdrop-blur transition hover:bg-white/10">
            Contact Me
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    </section>
  );
}
