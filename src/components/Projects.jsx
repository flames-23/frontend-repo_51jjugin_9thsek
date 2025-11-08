import { Code2, Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Editor-Inspired Dashboard',
    desc: 'A VS Code-like interface with panels, command palette, and keyboard-first UX.',
    icon: Code2,
    tags: ['React', 'Tailwind', 'CommandK'],
  },
  {
    title: 'Mobile-First Portfolio',
    desc: 'Adaptive layout with buttery scrolling and accessible components.',
    icon: Smartphone,
    tags: ['React', 'Framer Motion', 'A11y'],
  },
  {
    title: 'Global Landing',
    desc: 'Localized marketing site with dark mode and snappy performance.',
    icon: Globe,
    tags: ['i18n', 'SEO', 'Performance'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#070b14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Selected Work</h2>
            <p className="mt-2 text-white/60">Clean, fast, and reliable UI — tuned for mobile and desktop.</p>
          </div>
          <a href="#contact" className="hidden rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:text-white hover:bg-white/10 sm:inline-block">Get in touch</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, desc, icon: Icon, tags }) => (
            <article key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:translate-y-[-2px] hover:bg-white/10">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/70">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
