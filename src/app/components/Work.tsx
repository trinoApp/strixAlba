import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CARD, DARK, FORE, DIM, LIME, BORDER } from "./constants";

const WORK = [
  {
    label: "AI Integration",
    title: "Document intelligence for a legal platform",
    outcome: "70% reduction in contract review time",
    year: "2024",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&h=600&fit=crop&auto=format",
    alt: "Legal documents on a desk",
  },
  {
    label: "Platform Engineering",
    title: "Monolith-to-microservices for Series B fintech",
    outcome: "4× throughput, zero-downtime migration",
    year: "2023",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format",
    alt: "Analytics dashboard on a monitor",
  },
  {
    label: "AI Product",
    title: "Autonomous sales outreach assistant",
    outcome: "3× reply rate, shipped in 6 weeks",
    year: "2024",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format",
    alt: "Sales growth charts on laptop",
  },
];

export function Work() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 64 }}>
          <div>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              / Selected work
            </span>
            <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
              CASE STUDIES
            </h2>
          </div>
          <a href="#contact" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: 13, color: DIM, textDecoration: "underline", textUnderlineOffset: 4 }}>
            Request full deck →
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: BORDER }}>
          {WORK.map((w, i) => (
            <div
              key={w.title}
              style={{ backgroundColor: hovered === i ? CARD : DARK, display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 32, alignItems: "center", padding: "32px 32px", cursor: "pointer", transition: "background-color 0.2s" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, opacity: 0.6 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: LIME, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, opacity: 0.7 }}>
                  {w.label}
                </div>
                <div style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 600, fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)", color: FORE, letterSpacing: "-0.02em", marginBottom: 6 }}>
                  {w.title}
                </div>
                <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, color: DIM }}>
                  ↗ {w.outcome}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {hovered === i && (
                  <div style={{ width: 120, height: 72, borderRadius: 2, overflow: "hidden", flexShrink: 0 }}>
                    <img src={w.img} alt={w.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                )}
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: DIM }}>{w.year}</span>
                <ArrowUpRight size={14} style={{ color: hovered === i ? LIME : DIM, transition: "color 0.2s", flexShrink: 0 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
