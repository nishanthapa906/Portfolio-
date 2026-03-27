import { useState, useEffect } from 'react';

const lines = [
  { prompt: '~', cmd: 'node --version', out: 'v20.11.0', outColor: '#4ade80' },
  { prompt: '~', cmd: 'git status', out: 'nothing to commit, working tree clean', outColor: '#60a5fa' },
  { prompt: '~', cmd: 'npm run build', out: '✓ compiled in 1.2s', outColor: '#fbbf24' },
  { prompt: '~', cmd: 'python train.py --model cnn', out: 'Epoch 50/50 — acc: 0.94', outColor: '#a78bfa' },
];

type VisibleItem = { type: 'prompt' | 'output'; lineIdx: number; text: string; color?: string };

export function TerminalAnimation() {
  const [visible, setVisible] = useState<VisibleItem[]>([{ type: 'prompt', lineIdx: 0, text: '' }]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'output' | 'next'>('typing');

  useEffect(() => {
    if (lineIdx >= lines.length) {
      const t = setTimeout(() => {
        setLineIdx(0); setCharIdx(0); setPhase('typing');
        setVisible([{ type: 'prompt', lineIdx: 0, text: '' }]);
      }, 1200);
      return () => clearTimeout(t);
    }
    if (phase === 'typing') {
      const cmd = lines[lineIdx].cmd;
      if (charIdx < cmd.length) {
        const t = setTimeout(() => {
          setCharIdx(c => c + 1);
          setVisible(v => {
            const copy = [...v];
            copy[copy.length - 1] = { ...copy[copy.length - 1], text: cmd.slice(0, charIdx + 1) };
            return copy;
          });
        }, 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('output'), 300);
        return () => clearTimeout(t);
      }
    }
    if (phase === 'output') {
      const t = setTimeout(() => {
        setVisible(v => [...v, { type: 'output', lineIdx, text: lines[lineIdx].out, color: lines[lineIdx].outColor }]);
        setPhase('next');
      }, 200);
      return () => clearTimeout(t);
    }
    if (phase === 'next') {
      const t = setTimeout(() => {
        const next = lineIdx + 1;
        if (next < lines.length) {
          setVisible(v => [...v, { type: 'prompt', lineIdx: next, text: '' }]);
          setCharIdx(0); setLineIdx(next); setPhase('typing');
        } else {
          setLineIdx(lines.length);
        }
      }, 500);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, phase]);

  return (
    <div className="space-y-0.5">
      {visible.map((item, i) => (
        <div key={i} className="flex items-center gap-2 font-mono text-[0.7rem]">
          {item.type === 'prompt' ? (
            <>
              <span className="text-primary">❯</span>
              <span className="text-foreground/70">
                {item.text}
                {i === visible.length - 1 && (
                  <span className="inline-block w-[6px] h-[12px] bg-primary/70 ml-px align-middle animate-blink" />
                )}
              </span>
            </>
          ) : (
            <span style={{ color: item.color }} className="pl-4">{item.text}</span>
          )}
        </div>
      ))}
    </div>
  );
}
