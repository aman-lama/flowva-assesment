"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Check, Monitor, Heart } from "phosphor-react";
import GradientIcon from "../GradientIcon";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
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

const steps = [
  {
    title: "Sign in",
    description: "Create an account and connect your workflow in seconds.",
    icon: <Check size={65} weight="bold" color="white" />,
    gradient: "linear-gradient(135deg, #FDBA74, #FDE68A)",
  },
  {
    title: "Be productive",
    description: "Try new tools, use them in real projects, and share feedback.",
    icon: <Monitor size={65} weight="bold" color="white" />,
    gradient: "linear-gradient(135deg, #BBF7D0, #99F6E4)",
  },
  {
    title: "Earn points, score rewards",
    description: "Collect points and redeem them for perks, credits, and rewards.",
    icon: <Heart size={65} weight="bold" color="white" />,
    gradient: "linear-gradient(135deg, #BFDBFE, #DDD6FE)",
  },
];


export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-center text-4xl md:text-6xl font-bold text-gray-900"
        >
          Getting started is easy
        </motion.h2>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-20">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                variants={item}
                className="flex flex-col items-center text-center px-6"
              >
                {/* Icon */}
                
                <GradientIcon gradient={step.gradient}>
  {step.icon}
</GradientIcon>
                

                {/* Title */}
                <h3 className="text-lg font-medium text-gray-900 mt-5">
                  {index + 1}. {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
