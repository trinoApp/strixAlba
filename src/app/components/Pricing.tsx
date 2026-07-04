import { CARD, DARK, FORE, DIM, LIME, BORDER } from "./constants";

const PLANS = [
  {
    name: "Sprint",
    price: "$15k",
    cadence: "fixed scope",
    desc: "A single 4-week engagement. One problem, solved completely.",
    features: ["4 weeks", "Senior engineer", "Weekly demos", "Full handoff"],
    cta: "Book a sprint",
    featured: false,
  },
  {
    name: "Embedded",
    price: "$28k",
    cadence: "/ month",
    desc: "Two senior engineers inside your org. Fastest path to velocity.",
    features: ["Ongoing", "Two engineers", "Daily standups", "Shared tooling", "Code review"],
    cta: "Start here",
    featured: true,
  },
  {
    name: "Advisory",
    price: "$6k",
    cadence: "/ month",
    desc: "Senior architect on call. Strategy, reviews, second opinions.",
    features: ["4 hrs/week", "Architecture review", "Async Q&A", "On-call access"],
    cta: "Inquire",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            / Pricing
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
            CLEAR ENGAGEMENTS
          </h2>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 15, color: DIM, marginTop: 16, maxWidth: 400, marginInline: "auto", lineHeight: 1.7 }}>
            No retainers-for-their-own-sake. No junior surprises.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, backgroundColor: BORDER }}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                backgroundColor: plan.featured ? LIME : CARD,
                padding: "44px 36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.featured && (
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: DARK, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, opacity: 0.6 }}>
                  ★ Most popular
                </div>
              )}
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: plan.featured ? "#1A2D00" : LIME, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                {plan.name}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: 40, color: plan.featured ? DARK : FORE, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {plan.price}
                </span>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, color: plan.featured ? "#3A4D20" : DIM }}>
                  {plan.cadence}
                </span>
              </div>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 13.5, color: plan.featured ? "#2A3D10" : DIM, lineHeight: 1.65, marginBottom: 28, marginTop: 8 }}>
                {plan.desc}
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 32 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Outfit, sans-serif", fontSize: 13, color: plan.featured ? DARK : FORE }}>
                    <span style={{ width: 16, height: 1, backgroundColor: plan.featured ? DARK : LIME, display: "inline-block", opacity: plan.featured ? 0.4 : 0.5, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  padding: "13px 0",
                  borderRadius: 2,
                  textDecoration: "none",
                  backgroundColor: plan.featured ? DARK : "transparent",
                  color: plan.featured ? LIME : FORE,
                  border: plan.featured ? "none" : `1px solid ${BORDER}`,
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
