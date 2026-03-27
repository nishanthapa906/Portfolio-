import { useInView } from '@/hooks/useInView';
import { EXPERIENCE, EDUCATION } from '@/lib/data';

export function Experience() {
  const { ref, visible } = useInView();
  return (
    <section id="experience" ref={ref} className="py-24 px-[5%] max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground uppercase tracking-widest">
            <span className="w-8 h-px bg-primary" />
            Experience
          </div>
          <h2 className="font-serif text-3xl italic text-cream leading-snug">
            Where I've put the work in.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            One focused internship where I built real things, solved real problems, 
            and shipped production code alongside experienced engineers.
          </p>

          <div className="mt-4 p-5 rounded-xl border border-border bg-secondary/50">
            <h3 className="font-sans font-semibold text-foreground text-sm mb-1">Education</h3>
            <p className="font-sans text-sm text-foreground">{EDUCATION.degree}</p>
            <p className="font-mono text-[0.7rem] text-muted-foreground">{EDUCATION.school}</p>
            <p className="font-mono text-[0.65rem] text-primary mt-1">{EDUCATION.years}</p>
          </div>
        </div>

        {/* Right — experience card */}
        <div className="p-6 rounded-xl border border-border bg-card">
          <div className="flex justify-between items-start mb-5">
            <div>
              <h3 className="font-sans font-semibold text-foreground">{EXPERIENCE.title}</h3>
              <p className="font-mono text-[0.7rem] text-muted-foreground">{EXPERIENCE.company} · {EXPERIENCE.location}</p>
            </div>
            <span className="font-mono text-xs text-primary">{EXPERIENCE.year}</span>
          </div>

          <div className="flex flex-col gap-3 mb-5">
            {EXPERIENCE.bullets.map((text, i) => (
              <div key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary shrink-0 mt-0.5">→</span>
                {text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {EXPERIENCE.tags.map(t => (
              <span key={t} className="font-mono text-[0.6rem] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
