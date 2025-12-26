"use client";

import { testimonials } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useEffect, useState } from "react";


const CARD_WIDTH = 360;
const GAP = 32;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  // Responsive card count
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(testimonials.length - visible, 0);

  const viewportWidth =
    CARD_WIDTH * visible + GAP * (visible - 1);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold  text-center mb-16">
          JOIN A GROWING COMMUNITY
        </h2>

        {/* Slider */}
        <div
          className="relative overflow-hidden mx-auto"
          style={{ width: viewportWidth }}
        >
          <motion.div
            className="flex gap-8"
            animate={{
              x: -(index * (CARD_WIDTH + GAP)),
            }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${t.color} w-90 shrink-0 rounded-3xl p-8 h-full `}
              >
                <p className="mb-6 font-semibold text-lg leading-relaxed">
                  {t.text}
                </p>

                <div>
                  <div className="flex text-2xl gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span  key={i}>★</span>
                    ))}
                  </div>

                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-sm opacity-80">{t.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
          title="test1"
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            className="px-4 py-2 rounded-full border bg-black text-white cursor-pointer hover:bg-slate-800"
          >
            <ArrowCircleLeft weight="bold" size={24} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
              title="test"
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
          title="right-arrow"
            onClick={() =>
              setIndex((i) => Math.min(i + 1, maxIndex))
            }
            className="px-4 py-2 rounded-full border bg-black text-white cursor-pointer hover:bg-slate-800"
          >
            <ArrowCircleRight  weight="bold" size={24}  />
          </button>
        </div>
      </div>
    </section>
  );
}
