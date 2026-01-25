"use client"

import { GLSLHills } from "./glsl-hills"

export default function Hero() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
    <GLSLHills/>
    
    {/* Announcement Banner */}
    <div className="absolute top-44 z-20 px-4">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full px-4 py-2 shadow-lg transition-colors duration-300">
        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium transition-colors duration-300">
          🚀 Currently in development • Join our waitlist for early access
        </p>
      </div>
    </div>

    <div className="absolute top-64 z-10 space-y-6 text-center pointer-events-none px-4">
    <h1 className="font-sans text-5xl font-semibold tracking-tight sm:text-7xl whitespace-pre-wrap">
    <span className="italic text-4xl sm:text-6xl font-thin block mb-2">Stop scrolling, start growing</span>
      Make Every Minute Count
        </h1>
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
          Transform your idle time into productive moments with AI-powered <br className="hidden sm:block"/> activity suggestions. Physical fitness, mental growth, and wellness—all in minutes.
      </p>
      
      {/* CTA Button */}
      <div className="pointer-events-auto pt-4">
        <button
          onClick={scrollToWaitlist}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white dark:text-black bg-black dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer"
        >
          Get Started
        </button>
      </div>
           </div> 
      </div>
  )
}