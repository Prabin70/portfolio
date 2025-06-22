"use client"; 
import Link from "next/link";
import { useEffect, useState } from "react";
import { DotBackgroundDemo } from "./Background";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Star = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute animate-pulse ${className}`}
    >
      <path d="M12 0L14.09 7.91L22 10L14.09 12.09L12 20L9.91 12.09L2 10L9.91 7.91L12 0Z" />
    </svg>
  );
};

const Hero = () => {
  const skills = [
    [
      { text: "I'm" },
      { text: "a" },
      { text: "Professional" },
      { text: "Full", className: "text-blue-500" },
      { text: "Stack", className: "text-blue-500" },
      { text: "Developer.", className: "text-blue-500" },
    ],
    [
      { text: "I'm" },
      { text: "also" },
      { text: "a" },
      { text: "Figma", className: "text-blue-500" },
      { text: "Designer.", className: "text-blue-500" },
    ],
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [skills.length]);

  return (
    <div id="#" className="relative flex min-h-screen items-center justify-center overflow-hidden font-sans animated-gradient-bg">
      <div className="absolute top-0 left-0 h-full w-full opacity-50">
        <DotBackgroundDemo />
      </div>
    

      <Star className="top-[18%] left-[20%] h-3 w-3" />
      <Star className="top-[40%] left-[15%] h-5 w-5" />
      <Star className="top-[65%] left-[10%] h-2 w-2" />
      <Star className="top-[15%] right-[15%] h-6 w-6" />
      <Star className="top-[35%] right-[20%] h-3 w-3" />
      <Star className="top-[55%] right-[35%] h-4 w-4" />

      <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center md:gap-6">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          I'm <span>Prabin Shrestha</span>
        </h1>

        <TypewriterEffect
          key={currentSkillIndex}
          words={skills[currentSkillIndex]}
          className="text-2xl md:text-3xl lg:text-4xl"
          cursorClassName="bg-blue-500"
        />

        <p className="max-w-2xl text-base text-gray-300 md:text-lg">
          I design and develop compconste web solutions — blending intuitive user
          interfaces with robust backend systems to deliver fast, scalable, and
          seamless digital experiences.
        </p>

        <Link
          href={"/contact"}
          className="mt-4 rounded-lg bg-[#a78bfa] px-10 py-3 font-semibold text-white shadow-lg shadow-[#a78bfa]/20 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100"
        >
          More about me
        </Link>
      </div>

      <div className="pointer-events-none absolute opacity-40 bottom-0 left-1/2 w-full max-w-[1600px] -translate-x-1/2">
       <DotLottieReact
      src="https://lottie.host/4864fa42-9a2d-4410-8e95-c3c2a0515572/mCvTsYwEQe.lottie"      
      loop
      autoplay
    />
      </div>
    </div>
  );
};

export default Hero;
