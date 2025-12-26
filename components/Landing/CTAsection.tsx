"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter()
  return (
    <section className="w-full bg-linear-to-b from-blue-700 to-pink-500">
      <div className="w-full text-center">

        {/* Container */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl shadow-xl  px-10 py-16"
        >

          {/* Heading */}

          <h2 className="text-3xl text-white md:text-4xl font-extrabold  leading-tight mb-6">
            Turn productivity into rewards
          </h2>


          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            A calm, smart space that organizes your tools, keeps your workflow
            focused, and puts you back in control — while earning rewards along
            the way.
          </p>

          {/* Actions */}
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => router.push('/auth/signup')} className="px-8 py-4 cursor-pointer rounded-full bg-black text-white text-lg font-semibold hover:bg-gray-900 transition">
              Get Started Today!
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
