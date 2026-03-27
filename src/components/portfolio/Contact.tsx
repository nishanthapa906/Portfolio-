import { useInView } from '@/hooks/useInView';

export function Contact() {
  const { ref, visible } = useInView();
  return (
    <section id="contact" ref={ref} className="py-24 px-[5%] max-w-7xl mx-auto text-center">
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
        <div className="flex items-center justify-center gap-3 font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-primary" />
          Get In Touch
          <span className="w-8 h-px bg-primary" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl italic text-cream mb-4">Let's build something.</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
          I'm actively looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <a href="mailto:nishanthapa906@gmail.com"
          className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-sans font-medium text-sm rounded-lg no-underline hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_20px_hsl(var(--primary)/0.3)]">
          Say Hello →
        </a>

        <div className="flex justify-center gap-6 mt-10">
          {[
            { label: 'GitHub', href: 'https://github.com/nishanthapa906' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arjun-thapa-b659811a3/' },
            { label: 'Email', href: 'mailto:nishanthapa906@gmail.com' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 no-underline">
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
