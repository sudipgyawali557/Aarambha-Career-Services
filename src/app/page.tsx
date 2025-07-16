import { About } from "@/components/LandingPageComponents/About/About";
import { CTA } from "@/components/LandingPageComponents/CTA/CTA";
import { Features } from "@/components/LandingPageComponents/Features/Features";
import { Footer } from "@/components/LandingPageComponents/Footer/Footer";
import { Hero } from "@/components/LandingPageComponents/Hero/Hero";
import { Navbar } from "@/components/LandingPageComponents/Navbar/Navbar";
import { Stats } from "@/components/LandingPageComponents/Stats/Stats";
import { Testimonials } from "@/components/LandingPageComponents/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
