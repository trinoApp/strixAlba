import { CARD, DIM, LIME, BORDER } from "./constants";

const MARQUEE_ITEMS = [
  "Software Engineering", "AI & Machine Learning", "Cloud Infrastructure",
  "API Design", "Product Strategy", "Data Pipelines", "LLM Integration",
  "DevOps", "System Architecture", "Technical Audits",
];

export function Marquee() {
  return (
    <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, overflow: "hidden", padding: "14px 0", backgroundColor: CARD }}>
      <div className="marquee-track" style={{ display: "flex", gap: 48, whiteSpace: "nowrap", width: "max-content" }}>
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: DIM, letterSpacing: "0.1em", textTransform: "uppercase", flexShrink: 0, display: "flex", alignItems: "center", gap: 20 }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: LIME, display: "inline-block" }} />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        .marquee-track { animation: marquee 28s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
