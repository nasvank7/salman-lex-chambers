import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Partners from "@/src/components/Partners";
import PracticeAreas from "@/src/components/PracticeAreas";
import WhyUs from "@/src/components/WhyUs";
import Banner from "@/src/components/Banner";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import FloatingMobileCTA from "@/src/components/FloatingMobileCTA";

export default function Home() {
  return (
    <>
      <main className="pb-[72px] lg:pb-0">
        <Navbar />
        <Hero />
        <About />
        <Partners />
        <PracticeAreas />
        <WhyUs />
        <Banner />
        <Contact />
        <Footer />
      </main>
      <FloatingMobileCTA />
    </>
  );
}
