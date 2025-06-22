import React from "react";
import Image from "next/image";
import { Timeline } from "../ui/timeline";

export function Skills() {
  const getImagePath = (num: number) => `/ss${num}.png`;

  const data = [
    {
      title: "MERN",
      content: (
        <div id="projects">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Everything I rely on to turn ideas into reality — efficiently and creatively.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={getImagePath(i)}
                alt={`ss${i}`}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "UI/UX",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
          </p>
         
          <div className="grid grid-cols-2 gap-4">
            {[5, 6, 7, 8].map((i) => (
              <Image
                key={i}
                src={getImagePath(i)}
                alt={`ss${i}`}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Cyber Security",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8 space-y-2">
            {[
              "✅ Card grid component",
              "✅ Startup template Aceternity",
              "✅ Random file upload lol",
              "✅ Himesh Reshammiya Music CD",
              "✅ Salman Bhai Fan Club registrations open",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                {text}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[9, 10, 11, 12].map((i) => (
              <Image
                key={i}
                src={getImagePath(i)}
                alt={`ss${i}`}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
