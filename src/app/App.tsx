import { useEffect, useState } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { TranslationProvider } from "./i18n/context";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Advantage } from "./components/Advantage";
import { FlightSteps } from "./components/FlightSteps";
import { Team } from "./components/Team";
import { Story } from "./components/Story";
import { Footer } from "./components/Footer";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      style={{
        position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 99999,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: pos.x - 100, top: pos.y - 100,
          width: 200, height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(170,255,0,0.1) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <CursorGlow />
        <div style={{ minHeight: "100vh", overflowX: "hidden", cursor: "none" }}>
          <Nav />
          <Hero />
          <Services />
          <Projects />
          <Advantage />
          <FlightSteps />
          <Team />
          <Story />
          <Footer />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
}
