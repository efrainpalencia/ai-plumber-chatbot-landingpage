import { Link } from "react-router-dom";
import BackgroundBlur from "../BackgroundBlur/BackgroundBlur";

const HeroSection = () => {
  return (
    <section className="">
      <BackgroundBlur />

      {/* Background Image */}
      <img
        src="bot-background.png"
        alt="PipeLine AI Bot"
        className="absolute z-0 top-28 left-1/2 -translate-x-1/2 w-[350px] sm:w-[450px] md:w-[600px] lg:w-[600px] opacity-80 pointer-events-none select-none"
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-2 py-10 flex flex-col lg:flex-row  items-start lg:items-center justify-between gap-24">
        {/* Left: Hero Text */}
        <div className="flex-1 flex flex-col lg:pr-22 gap-6 max-w-xl ">
          <div className="text-white text-2xl md:text-3xl font-extralight">
            INTRODUCING
          </div>

          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bebas leading-tight">
            PipeLine AI
          </h1>

          <p className="text-white text-xl sm:text-2xl font-medium">
            AI that fills your plumbing pipeline
          </p>

          <p className="text-white text-base px-2 sm:text-lg leading-relaxed bg-slate-800 rounded-xl">
            While you’re fixing pipes, your chatbot is booking jobs. Capture
            leads instantly, respond after hours, and grow your business while
            your AI works as hard as you do.{" "}
            <span className="text-bold text-sky-500">
              Get 50% Off for Life — Join the Early Access List!
            </span>
          </p>

          <button className="w-fit px-3 py-1.5 border border-white text-white rounded-2xl text-base font-medium hover:bg-white hover:text-slate-900 transition">
            <Link to="/offerings">Learn More</Link>
          </button>
        </div>

        {/* Right: Feature Box */}
        <div className="flex-1 w-full lg:max-w-md mt-8 lg:mt-84 lg:pl-8 px-2 bg-slate-800 rounded-xl">
          <div className="">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-white text-2xl font-light">
                Benefits & Features
              </h2>
              <div className="w-8 border-t-2 border-white" />
            </div>
            <ul className="text-white text-base leading-relaxed list-disc list-inside space-y-2">
              <li>24/7 AI chatbot for your website</li>
              <li>Instant lead capture + SMS alerts</li>
              <li>No more shared leads or middlemen</li>
              <li>You own your customer list</li>
              <li>Booking, follow-ups, and review requests on autopilot</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
