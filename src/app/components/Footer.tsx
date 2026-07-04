import { OwlGlyph } from "./OwlGlyph";
import { useColors } from "./ThemeContext";

export function Footer() {
  const { CARD, FORE, DIM, BORDER } = useColors();
  return (
    <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "40px 24px", backgroundColor: CARD }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <OwlGlyph size={36} />
          <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: 12, color: FORE, letterSpacing: "-0.01em", opacity: 0.6 }}>
            WHITE OWL
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          {["Services", "Projects", "Advantage", "Steps", "Story"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, color: DIM, textDecoration: "none" }}>
              {l}
            </a>
          ))}
        </div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: DIM }}>
          © 2026 White Owl Studio
        </span>
      </div>
    </footer>
  );
}
