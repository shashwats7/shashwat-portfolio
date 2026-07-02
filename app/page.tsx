import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Tools from "@/components/Tools";
import Results from "@/components/Results";
import Framework from "@/components/Framework";
import WhyHireMe from "@/components/WhyHireMe";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Results />
      <Journey />
      <Framework />
      <WhyHireMe />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}