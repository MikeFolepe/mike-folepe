import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from '@/components/About';
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Ventures from "@/components/Ventures";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Research from "@/components/Research";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Ventures />
        <Research />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}