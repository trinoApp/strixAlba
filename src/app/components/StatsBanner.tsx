import { LIME, DARK } from "./constants";

export function StatsBanner() {
  return (
    <div style={{ backgroundColor: LIME, padding: "64px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40 }}>
        {[
          { n: "48+", label: "Shipped products" },
          { n: "$200M+", label: "Client value created" },
          { n: "Zero", label: "Missed launches" },
          { n: "6 yrs", label: "Avg. client relationship" },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: DARK, letterSpacing: "-0.03em", lineHeight: 1 }}>
              {s.n}
            </div>
            <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: 13, color: "#1A2D00", marginTop: 8 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
