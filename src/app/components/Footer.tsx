import { OwlGlyph } from "./OwlGlyph";
import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

const LINK_KEYS = ["services", "projects", "advantage", "steps", "story"];

export function Footer() {
  const { CARD, FORE, DIM, BORDER } = useColors();
  const { t, dict } = useTranslation();
  const footerLinks = dict.footer.links as string[];
  return (
    <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "40px 24px", backgroundColor: CARD }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <OwlGlyph size={36} />
          <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: 12, color: FORE, letterSpacing: "-0.01em", opacity: 0.6 }}>
            {t("footer.brand")}
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          {LINK_KEYS.map((key, i) => (
            <a key={key} href={`#${key}`} style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, color: DIM, textDecoration: "none" }}>
              {footerLinks[i] || key}
            </a>
          ))}
          <a href="mailto:contact@strixalba.com" style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, color: DIM, textDecoration: "none" }}>
            contact@strixalba.com
          </a>
        </div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: DIM }}>
          {t("footer.copyright")}
        </span>
      </div>
    </footer>
  );
}
