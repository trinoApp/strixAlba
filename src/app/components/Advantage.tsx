import { useColors } from "./ThemeContext";

const ADVANTAGES = [
  { title: "Unified senior team", desc: "No outsourcing chaos. One team owns the full product end-to-end." },
  { title: "Battle-tested collaboration", desc: "Years of shared experience mean faster decisions and fewer mistakes." },
  { title: "MVP-first execution", desc: "Get to market quickly. Validate before scaling complexity." },
  { title: "Direct builder access", desc: "Talk to the people actually writing the code. No miscommunication layers." },
  { title: "Iteration over assumptions", desc: "Build based on real feedback, not speculation." },
  { title: "Scalable system design", desc: "Products that adapt as your vision evolves." },
];

export function Advantage() {
  const { LIME, FORE, DARK, DIM, CARD, BORDER } = useColors();
  return (
    <section id="advantage" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}`, backgroundColor: DARK }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            / The Owl Advantage
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
            WHY WORK WITH US
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, backgroundColor: BORDER }}>
          {ADVANTAGES.map((a) => (
            <div
              key={a.title}
              style={{ backgroundColor: CARD, padding: "40px 32px" }}
            >
              <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: 16, color: FORE, letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.3 }}>
                {a.title}
              </h3>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 14, color: DIM, lineHeight: 1.7 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
