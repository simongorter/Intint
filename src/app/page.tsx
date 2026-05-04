import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OverOns from "@/components/OverOns";
import Tarieven from "@/components/Tarieven";
import Werkwijze from "@/components/Werkwijze";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <OverOns />
        <Reviews />
        <Tarieven />
        <Werkwijze />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
