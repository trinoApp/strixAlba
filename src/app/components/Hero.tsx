import { ArrowUpRight } from "lucide-react";
import { HeroOwl } from "./HeroOwl";
import { useColors } from "./ThemeContext";

export function Hero() {
  const { LIME, DARK, FORE, DIM, BORDER } = useColors();
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 64 }}>
      <div style={{ position: "absolute", right: "-15%", top: "50%", transform: "translateY(-50%)", width: "90%", maxWidth: 1100, opacity: 1, pointerEvents: "none" }}>
        <HeroOwl />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative" }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
            <span style={{ width: 28, height: 1, backgroundColor: LIME, display: "inline-block" }} />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Software Studio · Est. 2026
            </span>
          </div>

          <h1 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 7rem)", lineHeight: 1, letterSpacing: "-0.03em", color: FORE, margin: "0 0 32px" }}>
            OWL YOU NEED<br />
            IS AN<br />
            <span style={{ color: LIME }}>IDEA.</span>
          </h1>

          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: DIM, lineHeight: 1.7, maxWidth: 540, marginBottom: 48 }}>
            We bring together top talent across every discipline of software development, giving you one trusted partner for every digital challenge.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                backgroundColor: LIME,
                color: DARK,
                padding: "14px 28px",
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              Let's Take Flight <ArrowUpRight size={15} />
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "Outfit, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                border: `1px solid ${BORDER}`,
                color: FORE,
                padding: "14px 28px",
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              Our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
