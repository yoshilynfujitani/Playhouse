import Hero from "./Pages/Hero";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./Components/Navbar";
import BottomNav from "./Components/BottomNav";
import Works from "./Pages/Works";

function App() {
  return (
    <section className="bg-main min-h-screen w-screen overflow-clip  relative">
      <div className="absolute h-full w-screen" id="bg"></div>
      <div className="relative px-0 md:px-5">
        <AnimatedCursor
          innerSize={20}
          outerSize={10}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={10}
          showSystemCursor={true}
        />
        <Navbar />
        <Hero />
        <BottomNav />
        <Works />
      </div>
    </section>
  );
}

export default App;
