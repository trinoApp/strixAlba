import { useEffect, useState, useRef } from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { TranslationProvider } from "./i18n/context";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Advantage } from "./components/Advantage";
import { FlightSteps } from "./components/FlightSteps";
import { Team } from "./components/Team";
import { Story } from "./components/Story";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function CursorGlow() {
  const { theme } = useTheme();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [href], input, textarea, select, [role=button]"));
    };
    document.addEventListener("mouseover", onOver);
    return () => document.removeEventListener("mouseover", onOver);
  }, []);

  const isLight = theme === "light";
  const color = isLight ? "0,0,0" : "170,255,0";
  const baseOpacity = isLight ? 0.3 : 0.45;
  const hoverOpacity = isLight ? 0.3 : 0.85;

  return (
    <>
      <style>{`
        * { cursor: none !important; }
      `}</style>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 2147483647 }}>
        <div
          style={{
            position: "absolute",
            left: pos.x - 100, top: pos.y - 100,
            width: 200, height: 200,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${color},${baseOpacity}) 0%, transparent 70%)`,
            transition: "transform 0.3s ease, opacity 0.4s ease",
            transform: hovering ? "scale(1.8)" : "scale(1)",
            opacity: hovering ? hoverOpacity : baseOpacity,
          }}
        />
      </div>
    </>
  );
}

export default function App() {
  window.scrollTo(0, 0);
  return (
    <ThemeProvider>
      <TranslationProvider>
        <CursorGlow />
        <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
          <Nav />
          <Hero />
          <Services />
          <Projects />
          <Advantage />
          <FlightSteps />
          <Team />
          <Story />
          <CTA />
          <Footer />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
}
