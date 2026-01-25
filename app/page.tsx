import Hero from "@/components/Hero";
import Working from "@/components/Working";
import Testimonials from "@/components/Testimonials";
import Waitlist from "@/components/waitinglist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Hero/>
      <Working />
      <Testimonials />
      <Waitlist />
      <Footer />
    </main>
  );
}
