"use client";

import { cn } from "@/lib/utils";
import { Brain, Dumbbell, Heart, BookOpen, Zap, Activity } from "lucide-react";
import type React from "react";

// The main props for the HowItWorks component
interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

// The props for a single step card
interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

/**
 * A single step card within the "How It Works" section.
 * It displays an icon, title, description, and a list of benefits.
 */
const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 text-black dark:text-white transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-900"
    )}
  >
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white transition-colors duration-300">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-2 text-xl font-semibold text-black dark:text-white transition-colors duration-300">{title}</h3>
    <p className="mb-6 text-neutral-600 dark:text-neutral-400 transition-colors duration-300">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-black/20 dark:bg-white/20 transition-colors duration-300">
            <div className="h-2 w-2 rounded-full bg-black dark:bg-white transition-colors duration-300"></div>
          </div>
          <span className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * A responsive "How It Works" section that displays a 3-step process.
 * It is styled with shadcn/ui theme variables to support light and dark modes.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  ...props
}) => {
  const stepsData = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Analyzes Your Time",
      description:
        "Tell our AI how much time you have, and it instantly suggests productive activities tailored to your schedule.",
      benefits: [
        "Smart activity matching based on available time",
        "Personalized recommendations",
        "Learns your preferences over time",
      ],
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Choose Your Activity",
      description:
        "Select from physical exercises, brain training, knowledge building, or health-focused activities.",
      benefits: [
        "Physical activities: Quick workouts, stretches",
        "Mental: Brain teasers, memory games, learning",
        "Health: Meditation, breathing, posture checks",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Make Every Minute Count",
      description:
        "Transform idle time into productive moments. Track your progress and build better habits.",
      benefits: [
        "Progress tracking and achievements",
        "Build consistent productive habits",
        "Replace scrolling with growth",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-white dark:bg-black text-black dark:text-white py-16 sm:py-24 transition-colors duration-300", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="flex justify-center mb-4">
            <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-lg text-sm font-medium bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
              How It Works
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl transition-colors duration-300">
            Turn Wasted Time Into Growth
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
            Stop mindless scrolling. Start building a better you with AI-powered productivity activities that fit your schedule.
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-8 w-full max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-neutral-300 dark:bg-neutral-700 transition-colors duration-300"
          ></div>
          {/* Use grid to align numbers with the card grid below */}
          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
                // Center the number within its grid column
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-neutral-100 dark:bg-neutral-800 font-semibold text-black dark:text-white ring-4 ring-white dark:ring-black transition-colors duration-300"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
