import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Services from "@/components/sections/Services";
import VisualBreak from "@/components/sections/VisualBreak";
import Process from "@/components/sections/Process";
import Conversion from "@/components/sections/Conversion";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <VisualBreak />
        <Process />
        <Conversion />
      </main>
      <Footer />
    </>
  );
}
