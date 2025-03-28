import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BackgroundBlur from "./components/BackgroundBlur/BackgroundBlur";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ProductOfferings from "./components/ProductOfferings/ProductOfferings";

function App() {
  return (
    <BrowserRouter>
      <>
        <main className="flex-1 relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
          <BackgroundBlur />
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/offerings" element={<ProductOfferings />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
