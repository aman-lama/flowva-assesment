"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const navItems = [
  {
    label: "Hub",
    links: [
      { name: "Discover", image: "/header/discover.svg" },
      { name: "Library", image: "/header/library.svg" },
      { name: "Reward", image: "/header/reward.svg" },
    ],
  },
  {
    label: "Company",
    links: [
      { name: "About Us", image: "/header/about.svg" },
      { name: "Blog", image: "/header/blog.svg" },
    ],
  },
  {
    label: "Support",
    links: [
      { name: "Docs", image: "/header/faq.svg" },
      { name: "Blog", image: "/header/contact.svg" },

    ],
  },
  {
    label: "Community",
    links: [
      { name: "Affiliate", image: "/header/affiliate.svg" },
      { name: "Influencer", image: "/header/influencer.svg" },
      { name: "Refer to Earn", image: "/header/refer.svg" },
    ],
  },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter()

  return (
    <header className="w-full flex justify-center">
      <div className="w-full md:w-[80vw] h-14 md:mt-5 px-4 md:px-6 flex items-center md:rounded-full md:border md:border-gray-200 md:bg-white relative z-50">

        {/* Logo */}
        <div className="relative h-8 w-8 shrink-0">
          <Image src="/logo.png" alt="Logo" fill priority className="object-cover" />
        </div>

        <div className="hidden md:block mx-4 h-6 w-px bg-gray-200 shrink-0" />

        {/* Nav Wrapper */}
        <div
          className="hidden md:flex flex-1 gap-6 lg:gap-8 h-full items-center"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex cursor-pointer items-center gap-1 text-sm  text-gray-400 font-semibold hover:text-black h-full transition-colors"
              onMouseEnter={() => setActiveDropdown(item.label)}
            >
              {item.label}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""
                  }`}
              />
            </button>
          ))}

          {/* Animated Dropdown Panel */}

          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-[calc(75%-1px)] left-1/2 -translate-x-1/2 w-[98%] pt-4 z-[-1]"
              >
                <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl px-6 py-6 h-120 overflow-hidden">
                  <div className="flex gap-6 h-full">
                    {navItems
                      .find((item) => item.label === activeDropdown)!
                      .links.map((link) => (
                        <a
                          key={link.name}
                          href="#"
                          className="relative flex-none w-72 h-full shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300 group"
                        >
                          <Image src={link.image} alt={link.name} fill className="object-contain" />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                          <div className="absolute bottom-0 w-full uppercase p-4 text-black text-lg font-bold">
                            {link.name}
                          </div>
                        </a>
                      ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:block mx-4 h-6 w-px bg-gray-200 shrink-0" />

        {/* Auth Buttons */}

        <div className="ml-auto flex items-center gap-3">

          {/* Medium devices */}

          <button onClick={() => router.push('/auth/login')} className="hidden md:flex cursor-pointer lg:hidden rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
            Get Started
          </button>

          {/* Large devices */}

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => router.push('/auth/login')} className="rounded-full cursor-pointer bg-black px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">Login</button>
            <button onClick={() => router.push('/auth/signup')} className="rounded-full cursor-pointer bg-black px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
              Sign up
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}

        <div className="ml-auto md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-14 left-0 w-full bg-white flex flex-col overflow-auto z-40 px-6 py-6"
            >
              {navItems.map((item) => (
                <div key={item.label} className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                  <div className="flex flex-col gap-2">
                    {item.links.map((link) => (
                      <a key={link.name} href="#" className="text-gray-700 hover:text-black text-sm">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Get Started button */}
              
              <button className="mt-4 rounded-full bg-black px-4 py-2 text-white font-medium hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
