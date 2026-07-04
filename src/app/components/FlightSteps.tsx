import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { OwlGlyph } from "./OwlGlyph";
import { useColors } from "./ThemeContext";

const STEPS = [
  { n: "01", title: "Start with your idea", body: "We align on your vision and see the full potential behind what you're building." },
  { n: "02", title: "Plan the execution", body: "We bring structure and clarity, mapping the smartest path from concept to product." },
  { n: "03", title: "Build the MVP", body: "We turn the idea into a focused product through fast, precise execution." },
  { n: "04", title: "Launch & improve", body: "We observe real-world usage and refine the product through continuous learning and iteration." },
  { n: "05", title: "Support your growth", body: "We stay with your product as it evolves, ensuring it scales with stability, precision, and long-term direction." },
];

export function FlightSteps() {
  const { FORE, DIM, LIME, BORDER } = useColors();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="steps" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="flex-col md:grid">
        <div style={{ position: "sticky", top: 100 }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            / How we work
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3vw, 3.2rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
            TAKE FLIGHT<br />
            <span style={{ color: LIME }}>STEP BY STEP</span>
          </h2>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 14, color: DIM, lineHeight: 1.7, marginTop: 20 }}>
            From idea to launch to growth — a clear path forward.
          </p>
          <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 8 }}>
            <OwlGlyph size={40} glowing />
          </div>
        </div>

        <div>
          {STEPS.map((step, i) => (
            <div key={step.n} style={{ borderTop: `1px solid ${BORDER}` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 0", background: "none", border: "none", cursor: "pointer", gap: 16 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, opacity: 0.7, flexShrink: 0 }}>{step.n}</span>
                  <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 600, fontSize: "clamp(1rem, 2vw, 1.4rem)", color: FORE, letterSpacing: "-0.02em", textAlign: "left" }}>
                    {step.title}
                  </span>
                </div>
                {open === i
                  ? <Minus size={16} style={{ color: LIME, flexShrink: 0 }} />
                  : <Plus size={16} style={{ color: DIM, flexShrink: 0 }} />
                }
              </button>
              {open === i && (
                <div style={{ paddingBottom: 28, paddingLeft: 56 }}>
                  <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 15, color: DIM, lineHeight: 1.75, maxWidth: 520 }}>
                    {step.body}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${BORDER}` }} />
        </div>
      </div>
    </section>
  );
}
