// components/BackgroundBlur.tsx
import React from "react";

const BackgroundBlur = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[50%] h-[600px] -top-96 left-1/2 -translate-x-1/2 bg-sky-800 bg-opacity-50 rounded-full blur-[120px]" />
      <div className="absolute w-[600px] h-[600px] top-[900px] left-0 bg-purple-900 bg-opacity-60 rounded-full blur-[100px]" />
      <div className="absolute w-[800px] h-[800px] top-[700px] left-1/2 -translate-x-1/2 bg-pink-900 bg-opacity-70 rounded-full blur-[120px]" />
    </div>
  );
};

export default BackgroundBlur;
