import { useState, useEffect } from 'react';

const Skills = [
  { name: 'Frontend', tools: ['React', 'Oracle APEX'] },
  { name: 'Backend', tools: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
  { name: 'Special tools', tools: ['Tailwind CSS', 'Socket.io', 'ML (SVM, CNN)', 'Git'] }
];

const Projects = [
  {
    name: 'Vehicle Renting System',
    desc: 'Full-stack solution with real-time chat, auto-location fetching, and premium management features built on Oracle APEX and Node.js.',
    link: 'https://oracleapex.com/ords/r/nissan_works/vehicle-renting-system107051/default-home-page1?session=100441999854578',
    tech: 'Oracle APEX, Node.js'
  },
  {
    name: 'Sisksya Sadan',
    desc: 'Academic ERP - Comprehensive MERN stack application for managing student data, attendance, and grading with secure access.',
    link: 'https://sikshya-sadan-fullstack.vercel.app/',
    tech: 'MERN Stack'
  },
  {
    name: 'Momo Houser',
    desc: 'Full-stack MERN food platform with ordering system, personalized profiles, and interactive menu management.',
    link: 'https://momo-house-nu.vercel.app/',
    tech: 'MERN Stack'
  },
  {
    name: 'Voice Emotion Analyzer',
    desc: 'Intelligent AI model analyzing real-time vocal patterns to detect emotional states with high accuracy.',
    link: 'https://92043jej-nissan-space.hf.space/',
    tech: 'Python, ML, CNN',
    demo: 'https://92043jej-nissan-space.hf.space/'
  }
];

const TerminalCode = `// Arjun Thapa Dev Profile
const focus = ["High Performance", "Modern UX", "Scalable Dev"];

const stats = {
  active: true,
  mission: "Transforming ideas into resilient systems",
  internship: "3 Months (Certified)",
  location: "Kathmandu, NP"
};

const buildSuccess = (coffee, passion) => {
  return (coffee && passion) ? "Deployment Ready" : "Error: Need more passion";
};

console.log(buildSuccess(true, stats.active));`;
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['Full Stack Developer', 'MERN Enthusiast', 'ML Specialist', 'APEX Developer'];

  useEffect(() => {
    const handleMove = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMove);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const typewriter = setTimeout(() => {
      const currentRole = roles[roleIdx];
      if (!isDeleting) {
        setTypedRole(currentRole.substring(0, typedRole.length + 1));
        if (typedRole === currentRole) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setTypedRole(currentRole.substring(0, typedRole.length - 1));
        if (typedRole === '') {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(typewriter);
    };
  }, [typedRole, isDeleting, roleIdx]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'glass py-4 shadow-2xl' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-3xl font-black tracking-tighter text-primary hover:scale-105 transition-transform cursor-pointer">ARJUN.</span>
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="hover:text-primary transition-colors">Hire</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 max-w-7xl mx-auto relative pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Available for Opportunities</span>
            </div>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
              ARJUN<br />
              <span className="text-primary italic">THAPA.</span>
            </h1>
            <div className="h-12 flex items-center font-mono text-xl text-primary font-black mb-10">
              <span className="text-muted-foreground/50 mr-4">_</span>
              <span className="text-primary">{typedRole}</span>
              <span className="w-[3px] h-6 bg-primary ml-1 animate-blink" />
            </div>
            <p className="max-w-lg text-lg text-muted-foreground font-medium mb-12 leading-relaxed">
              Architecting high-performance digital solutions with MERN, Oracle APEX and ML. Specializing in intelligent systems and seamless user experiences.
              I am a BCA student from <span className="text-white border-b-2 border-primary/50 font-bold">Citizen College, Pokhara University </span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="px-10 py-5 bg-primary text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_10px_40px_rgba(0,255,106,0.2)]">
                Projects
              </a>
              <a href="/Resume.pdf" target="_blank" className="px-10 py-5 border-2 border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-all">
                Résumé
              </a>
            </div>
          </div>

          {/* Visual Panel */}
          <div className="relative group perspective">
            {/* Project/Code Card */}
            <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl mb-8 group-hover:-translate-y-2 transition-all duration-700">
              <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="glass px-4 py-1.5 rounded-xl border border-primary/20">
                  <span className="text-[10px] font-mono text-primary font-black uppercase tracking-widest">ARJUN.js</span>
                </div>
              </div>
              <pre className="p-8 font-mono text-sm leading-relaxed overflow-x-auto text-primary/80 min-h-[280px]">
                <code>{TerminalCode}</code>
              </pre>
            </div>

            {/* Terminal Window */}
            <div className="relative glass rounded-2xl border border-white/5 overflow-hidden shadow-xl" style={{ background: '#08090a' }}>
              <div className="bg-white/10 px-4 py-3 flex items-center gap-3 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-primary/20" />
                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest font-black">System Status</span>
              </div>
              <div className="p-6 md:p-8 font-mono text-[10px] md:text-xs space-y-4">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">❯</span>
                  <span className="text-white/70">arjun --status</span>
                </div>
                <div className="text-primary/60 ml-6">Available: Open to Full-Stack Opportunities</div>
                <div className="flex gap-3 pt-2">
                  <span className="text-primary font-bold">❯</span>
                  <span className="text-white/70">projects --sync</span>
                </div>
                <div className="text-blue-400 ml-6">Status: All Production Systems Live</div>
                <div className="flex gap-3 pt-2">
                  <span className="text-primary font-bold">❯</span>
                  <span className="text-white/70">portfolio --launch</span>
                  <span className="w-1.5 h-4 bg-primary animate-pulse shadow-[0_0_10px_#00ff6a]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-40 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-8 mb-16">
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500" />
                <img src="/profile.jpg" alt="Arjun Thapa" className="relative w-40 h-40 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-all duration-500 shadow-2xl" />
              </div>
              <div>
                <h2 className="text-5xl font-black mb-3 italic tracking-tight">Limitless <span className="text-primary">Vision.</span></h2>
                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest font-mono">
                  Certified Engineering Intern
                </div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl">
              I specialize in bridging the gap between design and development. Whether it's a real-time chat application or a machine learning model, my work stands at the intersection of aesthetic and utility.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 glass rounded-[2rem] border-primary/10 hover:border-primary/30 transition-all cursor-default group">
                <p className="text-4xl font-black text-primary mb-2 group-hover:scale-105 transition-transform origin-left">08+</p>
                <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Completed Ventures</p>
              </div>
              <div className="p-8 glass rounded-[2rem] border-primary/10 hover:border-primary/30 transition-all cursor-default group">
                <p className="text-4xl font-black text-primary mb-2 group-hover:scale-105 transition-transform origin-left">3.4 <span className="text-lg opacity-50">/4</span></p>
                <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">BCA Semester GPA</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {Skills.map(s => (
              <div key={s.name} className="p-10 border border-white/5 rounded-3xl hover:border-primary/20 transition-all group bg-white/[0.01]">
                <p className="font-black mb-8 group-hover:text-primary transition-colors uppercase tracking-[0.4em] text-[10px] text-muted-foreground">{s.name}</p>
                <div className="flex flex-wrap gap-4">
                  {s.tools.map(t => (
                    <span key={t} className="px-6 py-3 bg-white/5 rounded-xl font-mono text-[11px] hover:bg-primary hover:text-black transition-all cursor-pointer font-bold border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-24">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {Projects.map((p, idx) => (
            <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="group relative block w-full">
              <div className="aspect-[16/10] glass rounded-[3rem] p-8 md:p-14 flex flex-col group-hover:bg-primary/[0.03] transition-all duration-700 border border-white/5 group-hover:border-primary/30 relative overflow-hidden shadow-2xl">
                <div className="absolute top-8 md:top-12 right-8 md:right-12 w-12 h-12 md:w-16 md:h-16 rounded-2xl border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500 group-hover:rotate-12">
                  <span className="text-xl md:text-3xl">↗</span>
                </div>
                <div className="mb-auto">
                  <div className="text-[10px] md:text-[14px] font-black uppercase tracking-[0.3em] text-primary/50 mb-4 md:mb-8 flex items-center gap-3">
                    <span className="w-12 h-px bg-primary/20" /> 0{idx + 1}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black mb-3 md:mb-6 leading-none group-hover:text-primary transition-colors tracking-tighter">{p.name}</h3>
                  <p className="text-[10px] md:text-xs font-mono text-muted-foreground/60 mb-4 md:mb-8 uppercase tracking-widest">{p.tech}</p>
                </div>
                <p className="text-sm md:text-xl text-muted-foreground/80 leading-relaxed mb-6 md:mb-12 max-w-lg line-clamp-2">{p.desc}</p>
                <div className="flex gap-10 items-center">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary border-b-2 border-primary pb-px group-hover:opacity-70 transition-opacity">Full Case Study</span>
                  {p.demo && (
                    <span
                      onClick={(e) => { e.preventDefault(); window.open(p.demo, '_blank'); }}
                      className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors flex items-center gap-2"
                    >Live Demo <span>⬀</span></span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-24 text-center">
          <a href="https://github.com/nishanthapa906" target="_blank" className="inline-flex items-center gap-4 px-12 py-6 glass rounded-full border border-white/10 hover:border-primary/50 hover:scale-105 transition-all font-black text-xs uppercase tracking-widest">
            More on GitHub <span className="text-xl"></span>
          </a>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-white/[0.01]">
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="font-mono text-primary font-black mb-10 uppercase tracking-[0.5em] text-[10px]">Open for Collaboration</p>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-20 whitespace-nowrap overflow-hidden text-clip">HELLO@ARJUN</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 font-black uppercase tracking-[0.3em] text-[10px]">
            <a href="mailto:nishanthapa906@gmail.com" className="hover:text-primary tracking-tighter md:tracking-[0.3em] transition-all hover:scale-110">nishanthapa906@gmail.com</a>
            <a href="https://github.com/nishanthapa906" target="_blank" className="hover:text-primary transition-all hover:scale-110">GitHub</a>
            <a href="https://www.linkedin.com/in/arjun-thapa-b659811a3/?skipRedirect=true" target="_blank" className="hover:text-primary transition-all hover:scale-110">LinkedIn</a>
          </div>
          <div className="mt-48 pt-16 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8 opacity-40">
            <p className="text-[9px] font-mono uppercase tracking-[0.5em]">Arjun Thapa © 2026</p>
            <p className="text-[9px] font-mono uppercase tracking-[0.5em]">Designed with Intention</p>
          </div>
        </div>
      </footer>

      {/* Dynamic Cursor Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40 z-[-1]" style={{ background: 'radial-gradient(circle 800px at var(--x, 50%) var(--y, 50%), rgba(0, 255, 106, 0.1), transparent 80%)' }} />
    </div>
  );
}
