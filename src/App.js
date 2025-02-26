import "./App.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import RoundAnimation from "./components/RoundAnimation";
import Experiences from "./components/experiences";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import TrackPageView from "./components/track-page-view";
function App() {
  ReactGA.initialize("G-PW0JRT1WS2");
  ReactGA.send("pageview");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative  bg-black">
      <TrackPageView />
      {isLoading ? (
        <div className=" h-screen  w-full flex items-center justify-center content-center">
          <Loader />
        </div>
      ) : (
        <>
          <Toaster position="top-right" reverseOrder={false} />
          <Header id={""} />

          <main className="py-8 bg-white  px-4">
            <Hero id={"home"} />
            <About id={"about"} />

            <Skills id={"skills"} />
            <Experiences id={"experiences"} />
            <RoundAnimation />
            <Portfolio id={"projects"} />
            <Contact id={"contact"} />
            <ContactForm />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
