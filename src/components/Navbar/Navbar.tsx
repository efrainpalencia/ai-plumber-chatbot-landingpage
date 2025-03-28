// components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center lg:justify-end gap-6 pr-10 p-5 z-30">
      <div className="lg:pr-267">
        <Link to="/">
          <img className="w-10" src="water-leak.png" alt="Logo" />
        </Link>
      </div>
      <div>
        <a href="#pricing" className="text-white text-lg hover:underline">
          <Link to="/offerings">Pricing</Link>
        </a>
      </div>
      <div>
        <button className="btn bg-sky-500 px-3 py-1 text-white rounded-2xl text-lg font-medium hover:bg-sky-300 transition">
          <Link to="/offerings">Sign Up</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
