import { useInView } from '@/hooks/useInView';
import { SKILLS } from '@/lib/data';
import profileImg from '@/assets/profile.jpg';
import { useState } from 'react';

function hexToRgb(hex: string) {
  return `${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)}`;
}

function SkillRow({ s, i, vis }: { s: typeof SKILLS[0]; i: number; vis: boolean }) {
  const [h, sh] = useState(false);
  return (
    <div
      onMouseEnter={() => sh(true)} onMouseLeave={() => sh(false)}
      className="p-4 rounded-lg border flex justify-between items-center cursor-default transition-all duration-300"
      style={{
        background: h ? `rgba(${hexToRgb(s.color)},0.07)` : 'rgba(255,255,255,0.025)',
        borderColor: h ? `rgba(${hexToRgb(s.color)},0.25)` : 'rgba(255,255,255,0.05)',
        opacity: vis ? 1 : 0, transform: vis ? 'translateX(0)' : 'translateX(20px)',
        transitionDelay: `${i * 65 + 300}ms`,
      }}
    >
      <div>
        <p className="font-sans font-medium text-sm text-foreground">{s.cat}</p>
        <p className="font-mono text-[0.65rem] text-muted-foreground">{s.items.length} tools</p>
      </div>
      <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
        {s.items.map(item => (
          <span key={item} className="font-mono text-[0.6rem] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{item}</span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  const { ref, visible } = useInView();
  return (
    <section id="about" ref={ref} className="py-24 px-[5%] max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left */}
        <div className="flex flex-col gap-6" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground uppercase tracking-widest">
            <span className="w-8 h-px bg-primary" />
            About Me
          </div>

          <img src={profileImg} alt="Arjun Thapa" className="w-32 h-32 rounded-2xl object-cover border-2 border-border" loading="lazy" />

          <h2 className="font-serif text-3xl italic text-cream leading-snug">
            I write code the way a craftsman builds — with intention.
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed">
            I'm Arjun, a full stack developer from Kathmandu who genuinely enjoys 
            the problem-solving side of this work. I started building things on the web 
            because I wanted to see ideas come to life — and I haven't stopped since.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            From a MERN school management system to a live voice emotion analyzer 
            deployed on Hugging Face — I build things that are real, not just demos. 
            Currently finishing my BCA and actively looking for my next role.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <a href="mailto:nishanthapa906@gmail.com"
              className="px-6 py-2.5 bg-primary text-primary-foreground font-sans font-medium text-sm rounded-lg no-underline hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_16px_hsl(var(--primary)/0.25)]">
              Email Me
            </a>
            <a href="https://github.com/nishanthapa906" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 border border-border text-muted-foreground font-sans text-sm rounded-lg no-underline hover:text-foreground hover:border-foreground/20 transition-all duration-200">
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          {SKILLS.map((s, i) => <SkillRow key={s.cat} s={s} i={i} vis={visible} />)}
        </div>
      </div>
    </section>
  );
}
