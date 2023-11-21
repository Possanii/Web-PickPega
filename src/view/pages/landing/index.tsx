import About from "./about";
import Work from "./work";
import { HomeLandingPage } from "./home";
import "./landing.css";
import Testimonial from "./testimonial";
import Contact from "./contact";
import Footer from "./footer";

export function LandingPage() {
  return (
    <div className="App">
      <HomeLandingPage />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
