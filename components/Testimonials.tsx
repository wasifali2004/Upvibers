"use client"

import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "This app transformed my downtime! Instead of mindless scrolling, I now do quick workouts and feel energized throughout the day.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Mitchell",
    role: "Marketing Professional",
  },
  {
    text: "As a developer, I used to waste hours on social media. Now I use that time for brain training exercises and learning new skills!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Alex Chen",
    role: "Software Developer",
  },
  {
    text: "The AI suggestions are spot-on! I've discovered so many productive activities I can do in just 5-10 minutes during breaks.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Emma Rodriguez",
    role: "Student",
  },
  {
    text: "Finally, an app that helps me use my phone productively! The quick meditation and stretching exercises are perfect for busy days.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Michael Thompson",
    role: "Entrepreneur",
  },
  {
    text: "I've improved my knowledge base significantly! The bite-sized learning activities fit perfectly into my daily routine.",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Priya Sharma",
    role: "Teacher",
  },
  {
    text: "This platform helped me break my scrolling addiction. Now I spend that time on physical activities and mental wellness.",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    name: "Jessica Park",
    role: "Fitness Enthusiast",
  },
  {
    text: "The health-focused activities are amazing! Quick breathing exercises and posture checks have improved my work-from-home life.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "David Kumar",
    role: "Remote Worker",
  },
  {
    text: "I love how the AI understands my schedule and suggests activities that fit my available time. Truly life-changing!",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Olivia Johnson",
    role: "Busy Mom",
  },
  {
    text: "From brain teasers to quick workouts, this app has everything I need to make every minute count. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "James Wilson",
    role: "Executive",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background text-foreground my-20 relative transition-colors duration-300">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-lg text-sm font-medium bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
              Testimonials
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-black dark:text-white transition-colors duration-300">
            What our users say
          </h2>
          <p className="text-center mt-5 text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
            See how people are transforming their time into productivity.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;