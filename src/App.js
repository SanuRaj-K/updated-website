import "./App.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="relative">
      <Toaster position="top-right" reverseOrder={false} />
      <Header id={''} />
      <main className="py-8 bg-white  px-4">
        <Hero id={"home"} />
        <About id={"about"} />
        <Skills id={"skills"} />
        <Portfolio id={"projects"} />
        <Contact id={"contact"} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
