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
          <div className="flex items-center gap-3 font-mono text-xs text-blue font-bold uppercase tracking-widest">
            <span className="w-8 h-px bg-blue" />
            Experience
          </div>
          <h2 className="font-serif text-5xl italic text-cream font-black leading-snug">
            Where I've <span className="text-green">put the work in</span>.
          </h2>
          <p className="text-foreground text-lg leading-relaxed font-medium">
            One <span className="text-primary font-bold">focused internship</span> where I built <span className="text-green font-bold">real things</span>, solved <span className="text-blue font-bold">real problems</span>, 
            and <span className="text-yellow font-bold">shipped production code</span> alongside experienced engineers.
          </p>

          <div className="mt-4 p-6 border-2 border-blue">
            <h3 className="font-sans font-black text-foreground text-lg mb-2">Education</h3>
            <p className="font-sans text-base text-foreground font-bold">{EDUCATION.degree}</p>
            <p className="font-mono text-sm text-muted-foreground font-semibold">{EDUCATION.school}</p>
            <p className="font-mono text-sm text-blue font-bold mt-2">{EDUCATION.years}</p>
          </div>
        </div>

        {/* Right — experience card */}
        <div className="p-8 border-2 border-primary">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-sans font-black text-foreground text-xl">{EXPERIENCE.title}</h3>
              <p className="font-mono text-sm text-muted-foreground font-semibold">{EXPERIENCE.company} · {EXPERIENCE.location}</p>
            </div>
            <span className="font-mono text-lg text-green font-black">{EXPERIENCE.year}</span>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {EXPERIENCE.bullets.map((text, i) => (
              <div key={i} className="flex gap-3 text-base text-foreground leading-relaxed font-medium">
                <span className="text-green font-bold shrink-0 mt-0.5">✓</span>
                {text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {EXPERIENCE.tags.map(t => (
              <span key={t} className="font-mono text-sm px-3 py-1.5 rounded-md bg-green/20 text-green font-bold">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
