import { ArrowRight } from "lucide-react";
import { DARK, FORE, DIM, LIME, BORDER } from "./constants";

export function CTA() {
  return (
    <section id="contact" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="flex-col lg:grid">
        <div>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            / Start a project
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 5rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 20, lineHeight: 1, marginBottom: 0 }}>
            LET&apos;S BUILD<br />
            <span style={{ color: LIME }}>TOGETHER.</span>
          </h2>
        </div>
        <div>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 16, color: DIM, lineHeight: 1.75, marginBottom: 36 }}>
            We take on three to four new engagements per quarter. If you have
            something ambitious in mind, send us a note. We reply within one
            business day — always a senior person, never a sales rep.
          </p>
          <a
            href="mailto:hello@whiteowl.studio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "Unbounded, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: DARK,
              backgroundColor: LIME,
              padding: "18px 32px",
              borderRadius: 2,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            hello@whiteowl.studio
            <ArrowRight size={16} />
          </a>
          <div style={{ marginTop: 32, fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: DIM, lineHeight: 1.8 }}>
            <div>Based in: Berlin · London · Remote-first</div>
            <div>Response time: &lt; 24h business hours</div>
          </div>
        </div>
      </div>
    </section>
  );
}
