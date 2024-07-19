// import "./App.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className=" px-4">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
