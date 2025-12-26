"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-full flex flex-col px-6 text-center overflow-hidden mt-10 md:mt-20 xl:items-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center"
      >
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="max-w-3xl text-4xl md:text-6xl font-semibold tracking-wider text-gray-900"
        >
          Earn points for using tools.
          <br />
          <span className="block mt-2 font-light tracking-tight text-4xl md:text-5xl">
            Redeem them for real rewards.
          </span>
        </motion.h1>

        {/* Coins Field – ORIGINAL STRUCTURE */}
        <motion.div
          variants={fadeUp}
          className="relative mt-12 mb-10 w-full max-w-5xl h-48 md:h-64"
        >
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="relative w-12 h-12 md:w-16 md:h-16 opacity-90"
                style={{
                  transform: `translateY(${(i % 3) * 12}px)`,
                }}
              >
                <Image
                  src="/coin.svg"
                  alt="Coin"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl text-gray-600 text-base md:text-lg leading-relaxed"
        >
          Try new tools, share honest reviews, and earn points you can
          exchange for perks, credits, and exclusive rewards.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition">
            Get Started
          </button>
          <button className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
            View Rewards
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
