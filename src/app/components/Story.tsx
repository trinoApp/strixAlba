import { OwlGlyph } from "./OwlGlyph";
import { useColors } from "./ThemeContext";

export function Story() {
  const { FORE, DIM, LIME, BORDER } = useColors();
  return (
    <section id="story" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="flex-col lg:grid">
        <div>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            / Our story
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 5rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 20, lineHeight: 1, marginBottom: 0 }}>
            BUILT BY<br />
            <span style={{ color: LIME }}>FRIENDS.</span>
          </h2>
          <div style={{ marginTop: 32 }}>
            <OwlGlyph size={40} glowing />
          </div>
        </div>
        <div>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 16, color: DIM, lineHeight: 1.75, marginBottom: 36 }}>
            We started as friends who grew up together, each following different paths in technology, design, and engineering, until those paths naturally crossed again with a shared drive to build things the right way.
          </p>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 16, color: DIM, lineHeight: 1.75, marginBottom: 36 }}>
            Today, we're a studio where diverse expertise comes together under one roof to turn ideas into complete software systems. We're building a long-term partner for products that evolve, scale, and last.
          </p>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: DIM,
              lineHeight: 1.8,
              padding: "20px 24px",
              border: `1px solid ${BORDER}`,
              borderRadius: 2,
            }}
          >
            <div style={{ color: LIME, marginBottom: 8 }}>
              Based in: Tunisia · Tunis
            </div>
            <div>Founded: 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
