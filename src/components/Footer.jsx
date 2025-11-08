export default function Footer() {
  return (
    <footer className="bg-[#0a0d1b] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="text-white/50 text-sm">Built with React, Tailwind & Spline.</div>
      </div>
    </footer>
  );
}
