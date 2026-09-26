import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ProductDemo from "@/components/sections/ProductDemo";
import Jornadas from "@/components/sections/Jornadas";
import ProvaSocial from "@/components/sections/ProvaSocial";
import Oferta from "@/components/sections/Oferta";
import Conteudo from "@/components/sections/Conteudo";
import Comunidade from "@/components/sections/Comunidade";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductDemo />
      <Jornadas />
      <ProvaSocial />
      <Oferta />
      <Conteudo />
      <Comunidade />
      <FAQ />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
