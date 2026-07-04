import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useColors, useTheme } from "./ThemeContext";

export function CTA() {
  const { DARK, FORE, DIM, LIME, BORDER, CARD } = useColors();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${encodeURIComponent(formData.message).replace(/%20/g, '+')}`;
    window.location.href = `mailto:contact@strixalba.com?subject=New%20Project%20Inquiry&body=${body}`;

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputBg = theme === "dark" ? DARK : CARD;

  const inputStyle = {
    width: "100%",
    fontFamily: "Outfit, sans-serif",
    fontSize: 16,
    color: FORE,
    backgroundColor: inputBg,
    border: `1px solid ${BORDER}`,
    borderRadius: 2,
    padding: "16px 20px",
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  const labelStyle = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 11,
    color: LIME,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    marginBottom: 8,
    display: "block",
  } as React.CSSProperties;

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
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <a
              href="mailto:contact@strixalba.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "Unbounded, sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: LIME,
                textDecoration: "none",
                marginBottom: 16,
                letterSpacing: "-0.02em",
              }}
            >
              <Mail size={22} />
              contact@strixalba.com
            </a>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="flex-col sm:grid">
              <div>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: 140,
                }}
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                fontFamily: "Unbounded, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: DARK,
                backgroundColor: status === "submitting" ? "#6b6b6b" : LIME,
                padding: "18px 32px",
                borderRadius: 2,
                border: "none",
                cursor: status === "submitting" ? "not-allowed" : "pointer",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "background-color 0.2s",
                width: "fit-content",
              }}
            >
              {status === "submitting" ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <Mail size={16} />
                  Sent!
                </>
              ) : (
                <>
                  Send message
                  <Send size={16} />
                </>
              )}
            </button>
            
            {status === "success" && (
              <p style={{ fontFamily: "Outfit, sans-serif", fontSize: 14, color: LIME, marginTop: 12 }}>
                Thanks! We&apos;ll get back to you within 24 hours.
              </p>
            )}
            
            {status === "error" && (
              <p style={{ fontFamily: "Outfit, sans-serif", fontSize: 14, color: "#FF4444", marginTop: 12 }}>
                Something went wrong. Please email us directly at contact@strixalba.com
              </p>
            )}
            
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: DIM, lineHeight: 1.8, marginTop: 16 }}>
              <div>Based in: Tunis · Paris</div>
              <div>Response time: {'<'} 24h business hours</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
