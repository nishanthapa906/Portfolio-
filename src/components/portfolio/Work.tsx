import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { PROJECTS } from '@/lib/data';

function ProjectRow({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const [open, setOpen] = useState(false);
  const [h, sh] = useState(false);
  const { ref, visible } = useInView();

  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.5s ease ${i * 80}ms` }}>
      <div
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => sh(true)} onMouseLeave={() => sh(false)}
        className="grid grid-cols-[44px_1fr_auto_36px] gap-5 items-center py-5 px-4 cursor-pointer transition-all duration-200"
        style={{
          borderBottom: open ? 'none' : '1px solid rgba(255,255,255,0.06)',
          background: h || open ? 'rgba(255,255,255,0.025)' : 'transparent',
          borderRadius: h || open ? '10px' : '0',
        }}
      >
        <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
        <div>
          <p className="font-sans font-medium text-foreground text-sm">{p.title}</p>
          <p className="font-mono text-[0.65rem] text-muted-foreground">{p.role}</p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          {p.stack.slice(0, 2).map(s => (
            <span key={s} className="font-mono text-[0.6rem] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{s}</span>
          ))}
          <span className="font-mono text-[0.6rem] text-muted-foreground">{p.year}</span>
        </div>
        <span className="text-foreground/30 text-lg transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </div>

      {open && (
        <div className="px-4 pb-5 pt-2 ml-[44px] flex flex-col sm:flex-row gap-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex-1">
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map(s => (
                <span key={s} className="font-mono text-[0.6rem] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <a href={p.gh} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 border border-border font-mono text-xs text-muted-foreground rounded-lg no-underline hover:bg-secondary hover:border-foreground/20 transition-all duration-200">
              View on GitHub ↗
            </a>
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-primary-foreground font-mono text-xs rounded-lg no-underline hover:-translate-y-0.5 transition-all duration-200">
                ● Live Demo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Work() {
  const { ref, visible } = useInView();
  return (
    <section id="work" ref={ref} className="py-24 px-[5%] max-w-7xl mx-auto">
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-primary" />
              Selected Work
            </div>
            <h2 className="font-serif text-4xl italic text-cream">Projects</h2>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-muted-foreground">6 projects · 2022–2024</p>
            <a href="https://github.com/nishanthapa906" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-primary no-underline hover:underline">
              github.com/nishanthapa906 ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((p, i) => <ProjectRow key={p.n} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
