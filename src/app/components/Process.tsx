import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { OwlGlyph } from "./OwlGlyph";
import { FORE, DIM, LIME, BORDER } from "./constants";

const PROCESS = [
  { n: "01", title: "Deep discovery", body: "We spend the first week in your codebase, your data, and your user interviews. No proposals until we understand the real problem — not the stated one." },
  { n: "02", title: "Working software fast", body: "You see real, running code in week two. Not a prototype, not a Figma. This creates honest feedback loops and surfaces assumptions early when they are cheap to fix." },
  { n: "03", title: "Relentless iteration", body: "Bi-weekly demos, async standups, shared task board. You have full visibility into progress without needing to attend meetings to feel informed." },
  { n: "04", title: "Clean handoff", body: "Your team walks away owning the system. Full documentation, recorded architecture walkthroughs, and a support window. We optimize for your independence, not our perpetual engagement." },
];

export function Process() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="process" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="flex-col md:grid">
        <div style={{ position: "sticky", top: 100 }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            / Process
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3vw, 3.2rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
            HOW WE WORK
          </h2>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 14, color: DIM, lineHeight: 1.7, marginTop: 20 }}>
            Honest, async-first, and structured around early feedback. Every
            engagement follows this sequence.
          </p>
          <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 8 }}>
            <OwlGlyph size={52} glowing />
          </div>
        </div>

        <div>
          {PROCESS.map((step, i) => (
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
