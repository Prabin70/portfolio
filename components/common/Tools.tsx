"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import {
  MongoDB,
  ExpressJs,
  ReactIcon,
  Nodejs,
  Javascript,
  TailwindCss,
} from "../icons/allIcons";

export function Tools() {
  return (
    <div id="#skills" className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={toolsList}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const toolsList = [
  {
    icon: <MongoDB />,
    name: "MongoDB",
    title: "NoSQL Database",
  },
  {
    icon: <ExpressJs />,
    name: "Express.js",
    title: "Node.js Web Framework",
  },
  {
    icon: <ReactIcon />,
    name: "React",
    title: "Frontend Library",
  },
  {
    icon: <Nodejs />,
    name: "Node.js",
    title: "Backend JavaScript Runtime",
  },
  {
    icon: <Javascript />,
    name: "JavaScript",
    title: "Core Web Language",
  },
  {
    icon: <TailwindCss />,
    name: "Tailwind CSS",
    title: "Utility-first CSS Framework",
  },
];
