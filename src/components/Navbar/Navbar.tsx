// components/Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center lg:justify-end gap-6 pr-10 p-5 z-30">
      <div className="lg:pr-267">
        <img className="w-10" src="water-leak.png" alt="" />
      </div>
      <div>
        <a href="#pricing" className="text-white text-lg hover:underline">
          Pricing
        </a>
      </div>
      <div>
        <button className="btn bg-sky-500 px-3 py-1 text-white rounded-2xl text-lg font-medium hover:bg-blue-300 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
