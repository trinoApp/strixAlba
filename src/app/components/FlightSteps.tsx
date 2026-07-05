import { Plus, Minus } from "lucide-react";
import { useScrollLockSteps } from "../hooks/useScrollLockSteps";
import { useColors, useTheme } from "./ThemeContext";
import { useTranslation } from "../i18n/context";
import { useIsMobile } from "./ui/use-mobile";

type StepItem = { title: string; body: string; imageSrc: string };

export function FlightSteps() {
  const { FORE, DIM, LIME, BORDER } = useColors();
  const { theme } = useTheme();
  const { t, dict } = useTranslation();
  const isMobile = useIsMobile();
  const items = dict.flightSteps.items as StepItem[];
  const [open, setOpen] = useScrollLockSteps(items.length, { prevSectionId: "advantage", nextSectionId: "team", enabled: !isMobile });

  return (
    <section id="steps" style={{ borderTop: `1px solid ${BORDER}` }} className="px-4 md:px-6 py-[80px] md:py-[120px]">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-6 md:gap-20 items-start">
        <div className="md:sticky md:top-24">
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {t("flightSteps.label")}
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3vw, 3.2rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05, whiteSpace: "pre-line" }}>
            {t("flightSteps.heading")}
          </h2>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 14, color: DIM, lineHeight: 1.7, marginTop: 20 }}>
            {t("flightSteps.desc")}
          </p>
          {!isMobile && (
          <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <img
              src={items[open ?? 0].imageSrc}
              alt={items[open ?? 0].title}
              style={{ width: 500, height: "auto", maxHeight: 400, flexShrink: 0, filter: theme === "dark" ? "brightness(0) invert(1)" : "none" }}
            />
          </div>
          )}
        </div>

        <div>
          {items.map((step, i) => {
            const show = isMobile || open === i;
            return (
            <div key={i} style={{ borderTop: `1px solid ${BORDER}` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 0", background: "none", border: "none", cursor: "pointer", gap: 16 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, opacity: 0.7, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 600, fontSize: "clamp(1rem, 2vw, 1.4rem)", color: open === i ? LIME : FORE, letterSpacing: "-0.02em", textAlign: "left", transition: "color 0.5s ease" }}>
                    {step.title}
                  </span>
                </div>
                {!isMobile && (open === i
                  ? <Minus size={16} style={{ color: LIME, flexShrink: 0 }} />
                  : <Plus size={16} style={{ color: DIM, flexShrink: 0 }} />
                )}
              </button>
              {show && (
                <div style={{ paddingBottom: 28, paddingLeft: isMobile ? 0 : 56 }}>
                  <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 15, color: DIM, lineHeight: 1.75, maxWidth: 520 }}>
                    {step.body}
                  </p>
                  {isMobile && (
                    <img
                      src={step.imageSrc}
                      alt={step.title}
                      style={{ width: "100%", maxWidth: 400, marginTop: 20, filter: theme === "dark" ? "brightness(0) invert(1)" : "none" }}
                    />
                  )}
                </div>
              )}
            </div>
            );
          })}
          <div style={{ borderTop: `1px solid ${BORDER}` }} />
        </div>
      </div>
    </section>
  );
}
