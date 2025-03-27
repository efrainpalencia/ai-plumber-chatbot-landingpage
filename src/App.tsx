import "./App.css";
import BackgroundBlur from "./components/BackgroundBlur/BackgroundBlur";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main className="flex-1 relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <BackgroundBlur />
        <Navbar />
        <HeroSection />
      </main>
    </>
  );
}

export default App;
