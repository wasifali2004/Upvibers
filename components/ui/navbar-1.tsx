"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '#' },
    { label: 'About Us', href: '#' },
  ]

  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) setIsOpen(false); // Close mobile menu if open
  }

  return (
    <div className="flex justify-center w-full fixed top-5 z-50 px-4">
      <div className="flex items-center justify-between px-6 py-2 bg-white/50 dark:bg-black/50 backdrop-blur-2xl rounded-full shadow-lg border border-neutral-200/50 dark:border-neutral-800/50 w-full max-w-5xl relative z-10 transition-all duration-300">
        <div className="flex items-center gap-4">
          <motion.div
            className="cursor-pointer"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
             <Image 
              src={resolvedTheme === 'dark' ? "/logo2.png" : "/whitelogo.png"} 
              alt="Upvibers Logo" 
              width={120} 
              height={40} 
              className="w-auto h-8 object-contain"
            />
          </motion.div>
        </div>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <a href={item.href} className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide">
                  {item.label}
                </a>
              </motion.div>
            ))}
          </nav>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
           {mounted && (
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {resolvedTheme === 'dark' ? (
                 <Sun className="h-5 w-5 text-neutral-200" />
              ) : (
                 <Moon className="h-5 w-5 text-neutral-800" />
              )}
            </motion.button>
           )}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#"
              onClick={scrollToWaitlist}
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white dark:text-black bg-black dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-md"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
            {mounted && (
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
               {resolvedTheme === 'dark' ? (
                 <Sun className="h-5 w-5 text-neutral-200" />
              ) : (
                 <Moon className="h-5 w-5 text-neutral-800" />
              )}
            </motion.button>
           )}
            <motion.button className="flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
            <Menu className="h-6 w-6 text-neutral-900 dark:text-neutral-100" />
            </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-neutral-950 z-40 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-[34px] right-10 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-neutral-900 dark:text-neutral-100" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {links.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a href={item.href} className="text-xl font-semibold text-neutral-900 dark:text-neutral-100" onClick={toggleMenu}>
                    {item.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-bold text-white dark:text-black bg-black dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  onClick={scrollToWaitlist}
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }
