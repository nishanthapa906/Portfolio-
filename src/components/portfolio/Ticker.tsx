import { TICKER_ITEMS } from '@/lib/data';

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="py-6 overflow-hidden border-y border-border">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-muted-foreground/40 text-sm font-sans tracking-wide shrink-0">
            <span className="text-primary text-[0.5rem]">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
