import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const email = 'you@example.com';

  return (
    <section id="contact" className="relative bg-[#0a0d1b] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s work together</h2>
          <p className="mt-2 text-white/60">Have a project or idea? I’m open to collaborations and freelance work.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-3">Quick message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Hello from ${data.get('name')}`);
                const body = encodeURIComponent(`${data.get('message')}`);
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }}
              className="space-y-3"
            >
              <input name="name" required placeholder="Your name" className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea name="message" required rows={4} placeholder="Message" className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-black hover:bg-white/90">
                <Mail className="h-4 w-4" /> Send
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-3">Elsewhere</h3>
            <p className="text-white/70 mb-4">Find me on these platforms:</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
