"use client"

import React from "react"
import { useState } from "react"
import { joinWaitlist } from "@/actions/join-waitlist"
import { FaLinkedin, FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-black dark:text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300 ${className}`}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white dark:text-black h-10 px-4 py-2 ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export function WaitlistExperience() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError("")

    try {
      const result = await joinWaitlist(email)

      if (result.error) {
        setError(result.error)
        setIsLoading(false)
        return
      }

      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      setError("Failed to join waitlist. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="waitlist" className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black transition-colors duration-300 py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-black dark:to-neutral-900 transition-colors duration-300" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="relative backdrop-blur-xl bg-white/60 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-2xl transition-colors duration-300">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none transition-colors duration-300" />

            <div className="relative z-10">
              {!isSubmitted ? (
                <>
                  <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4 tracking-tight transition-colors duration-300">
                      Join the Waitlist
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed transition-colors duration-300">
                      Be the first to know when we launch. Transform your idle time into productive moments with AI-powered activity suggestions.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex flex-col gap-3">
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                        className="h-12 rounded-xl"
                      />
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-12 px-6 bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 font-medium cursor-pointer rounded-xl transition-all duration-300 shadow-lg"
                      >
                        {isLoading ? "Joining..." : "Join Waitlist"}
                      </Button>
                    </div>
                    {error && (
                      <p className="mt-3 text-sm text-red-600 dark:text-red-400 text-center transition-colors duration-300">
                        {error}
                      </p>
                    )}
                  </form>

                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="flex -space-x-2">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="User" 
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-black object-cover transition-all duration-300" 
                      />
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="User" 
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-black object-cover transition-all duration-300" 
                      />
                      <img 
                        src="https://randomuser.me/api/portraits/women/68.jpg" 
                        alt="User" 
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-black object-cover transition-all duration-300" 
                      />
                    </div>
                    <span className="text-neutral-600 dark:text-neutral-400 text-sm transition-colors duration-300">
                      Join 20+ early adopters
                    </span>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
                    <a
                      href="https://www.linkedin.com/in/wasif-ali-7693242a3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://x.com/wasifali2468"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      aria-label="X (Twitter)"
                    >
                      <FaXTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://discord.gg/pP7RHfSJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      aria-label="Discord"
                    >
                      <FaDiscord className="w-5 h-5" />
                    </a>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 flex items-center justify-center border border-emerald-300 dark:border-emerald-700 transition-colors duration-300">
                    <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2 transition-colors duration-300">
                    You're on the list!
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm transition-colors duration-300">
                    We'll notify you when we launch. Thanks for joining!
                  </p>
                </div>
              )}
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/10 to-white/20 dark:via-black/10 dark:to-black/20 pointer-events-none transition-colors duration-300" />
          </div>

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-900/20 dark:to-purple-900/20 blur-xl scale-110 -z-10 transition-colors duration-300" />
        </div>
      </div>
    </section>
  )
}