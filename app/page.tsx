import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Features } from "@/components/features"
import { EventTypes } from "@/components/event-types"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Costura 1: a cor do "Sobre" recorta a base da foto do Hero */}
        <div className="relative z-10 -mt-14 md:-mt-20 text-background">
          <SectionDivider />
        </div>
        <About />
        <Gallery />
        <Features />
        <EventTypes />
        {/* Costura 2: transição de EventTypes (bege) para Depoimentos (fundo claro) */}
        <div className="bg-secondary text-background">
          <SectionDivider />
        </div>
        <Testimonials />
        <Faq />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
