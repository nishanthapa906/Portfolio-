import { useState, useEffect } from 'react';

interface Token { t: string; c: string; }
interface CodeLine { indent: number; tokens: Token[]; }

const codeLines: CodeLine[] = [
  { indent: 0, tokens: [{ t: 'const', c: '#c792ea' }, { t: ' arjun ', c: '#82aaff' }, { t: '=', c: '#89ddff' }, { t: ' {', c: '#fff' }] },
  { indent: 1, tokens: [{ t: 'name', c: '#f07178' }, { t: ':', c: '#89ddff' }, { t: ' "Arjun Thapa"', c: '#c3e88d' }] },
  { indent: 1, tokens: [{ t: 'role', c: '#f07178' }, { t: ':', c: '#89ddff' }, { t: ' "Full Stack Developer"', c: '#c3e88d' }] },
  { indent: 1, tokens: [{ t: 'location', c: '#f07178' }, { t: ':', c: '#89ddff' }, { t: ' "Kathmandu 🇳🇵"', c: '#c3e88d' }] },
  { indent: 1, tokens: [{ t: 'available', c: '#f07178' }, { t: ':', c: '#89ddff' }, { t: ' true', c: '#ff9cac' }] },
  { indent: 1, tokens: [{ t: 'stack', c: '#f07178' }, { t: ':', c: '#89ddff' }, { t: ' [', c: '#fff' }] },
  { indent: 2, tokens: [{ t: '"React"', c: '#c3e88d' }, { t: ', ', c: '#fff' }, { t: '"Node"', c: '#c3e88d' }, { t: ', ', c: '#fff' }, { t: '"MongoDB"', c: '#c3e88d' }] },
  { indent: 1, tokens: [{ t: ']', c: '#fff' }, { t: ',', c: '#fff' }] },
  { indent: 1, tokens: [{ t: 'passion', c: '#f07178' }, { t: ':', c: '#89ddff' }, { t: ' "Building things"', c: '#c3e88d' }] },
  { indent: 0, tokens: [{ t: '}', c: '#fff' }, { t: ';', c: '#fff' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: '// ', c: '#546e7a' }, { t: 'currently shipping...', c: '#546e7a' }] },
  { indent: 0, tokens: [{ t: 'arjun', c: '#82aaff' }, { t: '.', c: '#fff' }, { t: 'buildSomethingCool', c: '#82b1ff' }, { t: '()', c: '#fff' }, { t: ';', c: '#fff' }] },
];

export function MacCodePanel() {
  const [visibleLines, setVisibleLines] = useState<CodeLine[]>([]);
  const [cursorLine, setCursorLine] = useState(0);

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      if (idx <= codeLines.length) {
        setVisibleLines(codeLines.slice(0, idx));
        setCursorLine(idx - 1);
        idx++;
      } else {
        setTimeout(() => {
          setVisibleLines([]);
          idx = 0;
        }, 2800);
      }
    }, 110);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-[14px] border border-border overflow-hidden animate-float"
      style={{ background: '#0f1117', boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)' }}>
      {/* Title bar */}
      <div className="px-4 py-3 flex items-center gap-2" style={{ background: '#1a1b26', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex gap-[7px]">
          {[{ bg: '#ff5f57' }, { bg: '#ffbd2e' }, { bg: '#28c840' }].map((d, i) => (
            <div key={i} className="w-3 h-3 rounded-full" style={{ background: d.bg }} />
          ))}
        </div>
        <div className="ml-3 flex items-center gap-1.5 px-3 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <div className="w-2 h-2 rounded-sm bg-blue" />
          <span className="font-mono text-[0.65rem] text-foreground/40 tracking-wide">arjun.js</span>
        </div>
        <div className="ml-auto flex gap-1 items-center">
          {[0, 1, 2].map(i => (
            <div key={i} className="w-[3px] h-[3px] rounded-full bg-foreground/15 animate-dot-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="py-5 min-h-[320px] font-mono text-[0.78rem] leading-[1.8]">
        {visibleLines.map((line, i) => (
          <div key={i} className="flex items-center pr-6" style={{ background: i === cursorLine ? 'rgba(255,255,255,0.035)' : 'transparent' }}>
            <span className="w-10 text-right pr-4 shrink-0 text-[0.65rem] select-none"
              style={{ color: i === cursorLine ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.12)' }}>
              {i + 1}
            </span>
            <span style={{ paddingLeft: `${line.indent * 16}px` }}>
              {line.tokens.map((tok, ti) => (
                <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
              ))}
              {i === cursorLine && (
                <span className="inline-block w-[2px] h-[13px] bg-primary ml-px align-middle rounded-sm animate-blink" />
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div className="px-4 py-1.5 flex justify-between items-center" style={{ background: '#1e2030', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex gap-3.5 items-center">
          <span className="font-mono text-[0.56rem] text-green tracking-widest">● MERN</span>
          <span className="font-mono text-[0.56rem] text-foreground/20">JavaScript</span>
          <span className="font-mono text-[0.56rem] text-foreground/20">UTF-8</span>
        </div>
        <span className="font-mono text-[0.56rem] text-foreground/20">Ln {visibleLines.length}, Col 1</span>
      </div>
    </div>
  );
}
