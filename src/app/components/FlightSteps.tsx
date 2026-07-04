import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { OwlGlyph } from "./OwlGlyph";
import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

export function FlightSteps() {
  const { FORE, DIM, LIME, BORDER } = useColors();
  const { t, dict } = useTranslation();
  const items = dict.flightSteps.items as { title: string; body: string }[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="steps" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="flex-col md:grid">
        <div style={{ position: "sticky", top: 100 }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {t("flightSteps.label")}
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3vw, 3.2rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05, whiteSpace: "pre-line" }}>
            {t("flightSteps.heading")}
          </h2>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 14, color: DIM, lineHeight: 1.7, marginTop: 20 }}>
            {t("flightSteps.desc")}
          </p>
          <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 8 }}>
            <OwlGlyph size={40} glowing />
          </div>
        </div>

        <div>
          {items.map((step, i) => (
            <div key={i} style={{ borderTop: `1px solid ${BORDER}` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 0", background: "none", border: "none", cursor: "pointer", gap: 16 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, opacity: 0.7, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
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
