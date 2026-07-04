import { useState } from "react";
import { CARD, DARK, FORE, DIM, LIME, BORDER } from "./constants";

const TESTIMONIALS = [
  {
    quote: "StrixAlba operates at a level of technical depth that most agencies cannot match. They found problems in our architecture we didn't know we had — and fixed them without drama.",
    name: "Sofia Reinholt",
    role: "CTO · Lumin Health",
  },
  {
    quote: "We had been burned by two previous firms. StrixAlba was the opposite experience in every way. Direct communication, senior execution, on time.",
    name: "Marcus Adeyemi",
    role: "VP Engineering · Carta Legal",
  },
  {
    quote: "The AI pipeline they built became a core competitive advantage within three months of launch. That's not a typical agency outcome.",
    name: "Priya Nair",
    role: "Founder · Fieldsight",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}`, backgroundColor: CARD }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          / Client words
        </span>

        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 280px", gap: 80, alignItems: "start" }} className="flex-col lg:grid">
          <div>
            <blockquote style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 400, fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)", color: FORE, letterSpacing: "-0.025em", lineHeight: 1.45, margin: 0 }}>
              &ldquo;{TESTIMONIALS[active].quote}&rdquo;
            </blockquote>
            <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 2, backgroundColor: LIME, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: 12, color: DARK }}>
                  {TESTIMONIALS[active].name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 14, color: FORE }}>
                  {TESTIMONIALS[active].name}
                </div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: DIM, marginTop: 2 }}>
                  {TESTIMONIALS[active].role}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: BORDER }}>
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                style={{
                  backgroundColor: active === i ? DARK : "transparent",
                  border: "none",
                  padding: "20px 20px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.15s",
                }}
              >
                <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 13, color: active === i ? FORE : DIM, marginBottom: 2 }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: active === i ? LIME : DIM, opacity: 0.7 }}>
                  {t.role}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
