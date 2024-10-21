import TestimonialsSection from "@/components/clients";
import Footer from "@/components/footer";
import Gallery from "@/components/gallary";
import HeroSection from "@/components/hero";
import NavBar from "@/components/navbar";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "126px" }}>
        <div id="hero">
          <HeroSection />
        </div>

        <div id="services">
          <ServicesSection />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="clients">
          <TestimonialsSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
