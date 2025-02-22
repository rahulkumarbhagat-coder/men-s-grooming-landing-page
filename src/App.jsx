import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/heroSection/Hero";
import Feature from "./components/featureSection/Features";
import Pricing from "./components/pricingSection/Pricing";
import Contact from "./components/contactSection/Contact";
import "./App.css";

function App() {
  return (
      <div>
      <Hero />
      <Feature />
      <Pricing />
      <Contact />
      </div>
  );
}

export default App;
