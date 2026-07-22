import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/lib/site-config"

export function Location() {
  return (
    <section id="localizacao" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Localização"
          title="Como chegar ao Sítio Garcia"
          description="Fácil acesso e apenas alguns minutos da cidade"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <Reveal x={-40} y={0} className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] aspect-video lg:aspect-square">
            <iframe
              src={siteConfig.address.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização do ${siteConfig.name}`}
              className="absolute inset-0"
            />
          </Reveal>

          {/* Info */}
          <Reveal delay={0.15} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Endereço</h3>
                <p className="font-[var(--font-lato)] text-muted-foreground">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.neighborhood} - {siteConfig.address.city}, {siteConfig.address.state}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ponto de Referência</h3>
                <p className="font-[var(--font-lato)] text-muted-foreground">{siteConfig.address.landmark}</p>
              </div>
            </div>

            <Button asChild size="lg" className="font-[var(--font-lato)] w-full sm:w-auto">
              <a href={siteConfig.address.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4 mr-2" />
                Como Chegar
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
