import { ThemeProvider } from "./components/ThemeContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Advantage } from "./components/Advantage";
import { FlightSteps } from "./components/FlightSteps";
import { Team } from "./components/Team";
import { Story } from "./components/Story";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
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
    </ThemeProvider>
  );
}
