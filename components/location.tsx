import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Location() {
  return (
    <section id="localizacao" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-[var(--font-lato)] text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Como chegar ao Sítio Garcia
          </h2>
          <p className="font-[var(--font-lato)] text-muted-foreground text-lg max-w-2xl mx-auto">
            Fácil acesso e apenas alguns minutos da cidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5!2d-48.7346062!3d-27.4840043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI5JzAyLjQiUyA0OMKwNDQnMDQuNiJX!5e0!3m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Sítio Garcia"
              className="absolute inset-0"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Endereço</h3>
                <p className="font-[var(--font-lato)] text-muted-foreground">
                  Rua Elesbão Miguel Cardoso, s/n<br />
                  Bairro Santa Catarina - Biguaçu, SC
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ponto de Referência</h3>
                <p className="font-[var(--font-lato)] text-muted-foreground">
                  Ao lado da nova subestação da Eletrosul
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="font-[var(--font-lato)] w-full sm:w-auto">
              <a
                href="https://www.google.com/maps?q=-27.4840043,-48.7346062&z=17&hl=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Como Chegar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
