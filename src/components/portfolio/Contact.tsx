import { useInView } from '@/hooks/useInView';

export function Contact() {
  const { ref, visible } = useInView();
  return (
    <section id="contact" ref={ref} className="py-24 px-[5%] max-w-7xl mx-auto text-center">
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
        <div className="flex items-center justify-center gap-3 font-mono text-sm text-green font-bold uppercase tracking-widest mb-8">
          <span className="w-12 h-px bg-green" />
          Get In Touch
          <span className="w-12 h-px bg-green" />
        </div>

        <h2 className="font-serif text-5xl md:text-7xl italic text-cream font-black mb-6">Let's <span className="text-primary">build something</span>.</h2>
        <p className="text-foreground text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          I'm <span className="text-green font-bold">actively looking</span> for new opportunities. Whether you have a question or just want to say hi, my inbox is <span className="text-primary font-bold">always open</span>.
        </p>

        <a href="mailto:nishanthapa906@gmail.com"
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-sans font-black text-lg rounded-lg no-underline hover:-translate-y-1 transition-all duration-200 shadow-[0_4px_20px_hsl(var(--primary)/0.3)]">
          Say Hello →
        </a>

        <div className="flex justify-center gap-8 mt-12">
          {[
            { label: 'GitHub', href: 'https://github.com/nishanthapa906' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arjun-thapa-b659811a3/' },
            { label: 'Email', href: 'mailto:nishanthapa906@gmail.com' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="font-mono text-base text-foreground font-bold hover:text-primary hover:scale-110 transition-all duration-200 no-underline">
              {link.label} ↗
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="font-mono text-[0.65rem] text-muted-foreground/50">
            © 2024 Arjun Thapa · Built with React & Tailwind
          </p>
        </div>
      </div>
    </section>
  );
}
