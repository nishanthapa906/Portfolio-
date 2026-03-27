import { useState, useEffect } from 'react';
import { MacCodePanel } from './MacCodePanel';
import { TerminalAnimation } from './TerminalAnimation';

const roles = ['Full Stack Developer', 'React Specialist', 'MERN Engineer', 'ML Builder', 'Problem Solver'];

export function Hero() {
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [typed, setTyped] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[wi];
    const t = setTimeout(() => {
      if (!del) {
        if (ci < word.length) { setTyped(p => p + word[ci]); setCi(c => c + 1); }
        else setTimeout(() => setDel(true), 1800);
      } else {
        if (ci > 0) { setTyped(p => p.slice(0, -1)); setCi(c => c - 1); }
        else { setDel(false); setWi(p => (p + 1) % roles.length); }
      }
    }, del ? 35 : 72);
    return () => clearTimeout(t);
  }, [typed, del, wi, ci]);

  return (
    <section id="home" className="min-h-screen flex items-center px-[5%] pt-20 pb-16 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none" style={{ background: 'hsl(var(--primary))' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: 'hsl(var(--blue))' }} />

      <div className="flex flex-col lg:flex-row items-start gap-12 w-full max-w-7xl mx-auto">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-6 z-10">
          {/* Status */}
          <div className="flex items-center gap-2 font-mono text-xs text-green font-bold">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
            Available · Kathmandu, Nepal 🇳🇵
          </div>

          {/* Name */}
          <div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-black italic text-cream leading-[0.95] tracking-tight">Arjun</h1>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-black text-primary leading-[0.95] tracking-tight">Thapa.</h1>
          </div>

          {/* Typewriter */}
          <div className="font-mono text-lg font-bold text-primary flex items-center gap-1">
            <span className="text-foreground/50">const role =</span>
            <span className="text-primary">"</span>
            <span className="text-green font-bold">{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-primary animate-blink" />
            <span className="text-primary">"</span>
          </div>

          {/* Description */}
          <p className="max-w-lg text-foreground text-base leading-relaxed font-medium">
            I build web applications that are <span className="text-primary font-bold">fast, clean and genuinely enjoyable</span> to use — 
            from <span className="text-green font-bold">React frontends</span> to <span className="text-blue font-bold">Node.js backends</span>, MongoDB databases and ML-powered features. 
            Finishing <span className="text-yellow font-bold">BCA</span> at Citizen College, Lalitpur.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-base rounded-lg hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_8px_28px_hsl(var(--primary)/0.45)]"
            >
              See My Work →
            </button>
            <a href="https://github.com/nishanthapa906" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-primary text-primary font-sans font-bold text-base rounded-lg no-underline hover:bg-primary hover:text-primary-foreground transition-all duration-200">
              GitHub ↗
            </a>
            <a href="tel:+9779800000000"
              className="px-6 py-3 border-2 border-green text-green font-sans font-bold text-base rounded-lg no-underline hover:bg-green hover:text-primary-foreground transition-all duration-200">
              📞 Call
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8 p-6 rounded-xl border border-primary/20" style={{ background: 'hsl(var(--primary) / 0.05)' }}>
            {[
              { n: '6+', l: 'Projects' }, { n: '2025', l: 'Internship' },
              { n: 'MERN', l: 'Core Stack' }, { n: 'BCA', l: '2021–2026' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <p className="text-2xl font-black text-primary">{s.n}</p>
                <p className="text-xs text-foreground font-bold uppercase tracking-widest mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 max-w-lg w-full flex flex-col gap-4">
          <MacCodePanel />
          {/* Mini terminal */}
          <div className="rounded-xl border border-border overflow-hidden" style={{ background: '#0f1117' }}>
            <div className="px-3 py-2 flex items-center gap-2" style={{ background: '#1a1b26', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex gap-1.5">
                {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
                  <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="font-mono text-[0.6rem] text-foreground/30">bash — terminal</span>
            </div>
            <div className="p-4">
              <TerminalAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
