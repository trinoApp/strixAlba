import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

export function Advantage() {
  const { LIME, FORE, DARK, DIM, CARD, BORDER } = useColors();
  const { t, dict } = useTranslation();
  const items = dict.advantage.items as { title: string; desc: string }[];
  return (
    <section id="advantage" style={{ borderTop: `1px solid ${BORDER}`, backgroundColor: DARK }} className="px-4 py-[80px] md:px-6 md:py-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12 md:mb-[72px]">
          <div>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {t("advantage.label")}
            </span>
            <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
              {t("advantage.heading")}
            </h2>
          </div>
        </div>

        <div style={{ backgroundColor: BORDER }} className="grid grid-cols-1 md:grid-cols-3 gap-px">
          {items.map((a, i) => (
            <div
              key={i}
              style={{ backgroundColor: CARD }}
              className="px-6 py-7 md:px-8 md:py-10"
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
