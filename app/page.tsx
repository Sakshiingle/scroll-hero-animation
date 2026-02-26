"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollCarHero() {
  const container = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const letters = gsap.utils.toArray<HTMLElement>(".value-letter");
      const car = carRef.current;
      const trail = trailRef.current;

      if (!car || !trail) return;

      const carWidth = 150;
      const endX = window.innerWidth - carWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section",
          start: "top top",
          end: "+=200%",
          scrub: 0.5, // Smoother scrub
          pin: ".track",
          invalidateOnRefresh: true,
        },
      });

      tl.to(car, {
        x: endX,
        ease: "none",
        onUpdate: function () {
          const currentX = gsap.getProperty(car, "x") as number;
          const carCenterX = currentX + carWidth / 2;

          // Reveal letters as car passes - uses getBoundingClientRect for accuracy
          letters.forEach((letter) => {
            const letterPos = letter.getBoundingClientRect().left;
            if (carCenterX >= letterPos) {
              gsap.to(letter, { opacity: 1, duration: 0.1, overwrite: "auto" });
            } else {
              gsap.to(letter, { opacity: 0, duration: 0.1, overwrite: "auto" });
            }
          });

          gsap.set(trail, { width: carCenterX });
        },
      });

      // Box Reveal Logic - Adjusted to match the visual timing of the car
      const boxConfigs = [
        { id: "#box1", trigger: 0.2 },
        { id: "#box2", trigger: 0.3 },
        { id: "#box3", trigger: 0.4 },
        { id: "#box4", trigger: 0.6 },
      ];

      boxConfigs.forEach((config) => {
        gsap.to(config.id, {
          scrollTrigger: {
            trigger: ".section",
            start: `top+=${config.trigger * 100}% top`,
            end: `top+=${(config.trigger + 0.1) * 100}% top`,
            scrub: true,
          },
          opacity: 1,
          scale: 1,
          y: 0,
        });
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="bg-[#121212] overflow-x-hidden select-none">
      <div className="section h-[300vh] relative">
        <div className="track sticky top-0 h-screen w-full flex items-center justify-center bg-[#d1d1d1] overflow-hidden">
          
          {/* Main Road Container */}
          <div className="road relative w-full h-50 bg-[#1e1e1e] flex items-center" id="road">
            {/* Trail Layer */}
            <div ref={trailRef} className="trail absolute top-0 left-0 h-full bg-[#45db7d] z-1 w-0" />
            
            {/* Centered Headline */}
            <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
              <h1 className="flex gap-4 text-[7vw] font-black tracking-tighter">
                {"WELCOME ITZFIZ ".split("").map((char, i) => (
                  <span key={i} className="value-letter text-[#111] opacity-0 inline-block min-w-[0.5ch]">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
            </div>

            {/* Car */}
            <Image
              ref={carRef}
              src="/car.png" 
              alt="car"
              width={600}
              height={400}
              className="car absolute  left-[-20] z-20 h-[130%] w-auto object-contain pointer-events-none"
              priority
            />
          </div>

          {/* Impact Boxes - Aligned as per screenshots */}
          {/* Top Row */}
          <div id="box1" className="text-box opacity-0 scale-90 translate-y-0 absolute top-[8%] left-[45%] bg-[#def54f] text-[#111] p-6 rounded-2xl flex flex-col z-20 shadow-xl min-w-62.5">
            <span className="text-6xl font-bold leading-none">58%</span> 
            <p className="text-sm mt-2 font-medium">Increase in pick up point use</p>
          </div>

          <div id="box3" className="text-box opacity-0 scale-90 translate-y-0 absolute top-[8%] right-[8%] bg-[#333] text-white p-6 rounded-2xl flex flex-col z-20 shadow-xl min-w-62.5">
            <span className="text-6xl font-bold leading-none">27%</span>
            <p className="text-sm mt-2 font-medium">Increase in pick up point use</p>
          </div>

          {/* Bottom Row */}
          <div id="box2" className="text-box opacity-0 scale-90 translate-y-0 absolute bottom-[8%] left-[40%] bg-[#6ac9ff] text-[#111] p-6 rounded-2xl flex flex-col z-20 shadow-xl min-w-62.5">
            <span className="text-6xl font-bold leading-none">23%</span>
            <p className="text-sm mt-2 font-medium">Decreased in customer phone calls</p>
          </div>

          <div id="box4" className="text-box opacity-0 scale-90 translate-y-0 absolute bottom-[8%] right-[5%] bg-[#fa7328] text-[#111] p-6 rounded-2xl flex flex-col z-20 shadow-xl min-w-62.5">
            <span className="text-6xl font-bold leading-none">40%</span>
            <p className="text-sm mt-2 font-medium">Decreased in customer phone calls</p>
          </div>

        </div>
      </div>
    </main>
  );
}