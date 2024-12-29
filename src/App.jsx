import "./App.css";
import Navbar from "./compoonents/Navbar";
import Hero from "./compoonents/Hero";
import Highlights from "./compoonents/Highlights";
import Model from "./compoonents/Model";
import Features from "./compoonents/Features";
import HowItWorks from "./compoonents/HowItWorks";
import Footer from "./compoonents/Footer";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  );
}

export default App;
