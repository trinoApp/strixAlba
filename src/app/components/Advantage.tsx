import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

export function Advantage() {
  const { LIME, FORE, DARK, DIM, CARD, BORDER } = useColors();
  const { t, dict } = useTranslation();
  const items = dict.advantage.items as { title: string; desc: string }[];
  return (
    <section id="advantage" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}`, backgroundColor: DARK }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {t("advantage.label")}
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
            {t("advantage.heading")}
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, backgroundColor: BORDER }}>
          {items.map((a, i) => (
            <div
              key={i}
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
