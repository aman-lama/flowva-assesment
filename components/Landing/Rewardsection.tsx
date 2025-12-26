"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const rewards = [
    {
      title: "PayPal Gift Card",
      description: "Redeem instantly and use globally for online payments.",
      logo: "/rewards/paypal.svg",
    },
    {
      title: "Amazon Gift Card",
      description: "Shop millions of products on Amazon worldwide.",
      logo: "/rewards/amazon.svg",
    },
    {
      title: "Apple Gift Card",
      description: "Use on App Store, Apple Music, iCloud, and more.",
      logo: "/rewards/apple.svg",
    },
    {
      title: "Google Play Gift Card",
      description: "Apps, games, movies, and subscriptions on Google Play.",
      logo: "/rewards/google.svg",
    },
    {
      title: "Free Udemy Course",
      description: "Learn new skills from top instructors at no cost.",
      logo: "/rewards/udemy.svg",
    },
    {
      title: "Virtual Visa Card",
      description: "Spend online anywhere Visa is accepted.",
      logo: "/rewards/visa.svg",
    },
  ];
  
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function RewardShowcase() {
  return (
    <section className="py-20 bg-[rgba(144,19,254,0.1)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Rewards You’ll Love
          </h2>
          <p className="text-gray-600">
            Redeem points for trusted global brands and valuable digital rewards.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white border border-gray-200 rounded-2xl p-6 
                         hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center h-20 mb-6">
                <Image
                  src={reward.logo}
                  alt={reward.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-center mb-2">
                {reward.title}
              </h3>

              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {reward.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        {/* More rewards hint */}
<div className="mt-14 flex flex-col items-center gap-4">
  <div className="flex items-center gap-4 opacity-70">
    <span className="h-px w-12 bg-gray-300" />
    <span className="text-sm font-medium text-gray-600">
      And many more rewards
    </span>
    <span className="h-px w-12 bg-gray-300" />
  </div>

  <p className="text-xs text-gray-500 text-center max-w-md">
    New gift cards and rewards are added regularly based on availability.
  </p>
</div>

      </div>
    </section>
  );
}
