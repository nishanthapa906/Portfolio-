import { useState, useEffect } from 'react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[60px] transition-all duration-400 ${
        scrolled
          ? 'bg-background/92 backdrop-blur-xl border-b border-border'
          : 'border-b border-transparent'
      }`}
    >
      <button
        onClick={() => scrollTo('home')}
        className="font-serif text-2xl font-black italic text-primary bg-transparent border-none cursor-pointer tracking-wide hover:scale-110 transition-transform"
      >
        AT
      </button>

      <div className="flex items-center gap-2">
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="bg-transparent border-none cursor-pointer text-foreground font-sans text-base font-bold px-4 py-2 rounded-lg hover:text-primary hover:bg-primary/15 transition-all duration-200"
          >
            {label}
          </button>
        ))}
        <a
          href="mailto:nishanthapa906@gmail.com"
          className="ml-3 px-6 py-2.5 bg-primary text-primary-foreground font-sans font-black text-base no-underline rounded-lg hover:bg-primary/80 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5 tracking-tight"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
