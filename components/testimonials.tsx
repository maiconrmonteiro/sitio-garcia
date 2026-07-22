"use client"

import { useEffect, useState } from "react"
import { Quote } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import { SectionHeading } from "@/components/section-heading"

// PLACEHOLDER — substitua os depoimentos abaixo por avaliações reais de
// clientes (Google, Instagram, WhatsApp) antes de publicar o site. Basta
// trocar os campos "name", "context" e "quote" de cada objeto.
const testimonials = [
  {
    name: "Nome do Cliente",
    context: "Casamento realizado no Sítio Garcia",
    quote:
      "PLACEHOLDER — substitua por um depoimento real de um casal que celebrou o casamento aqui, destacando o espaço e o atendimento.",
    initials: "NC",
  },
  {
    name: "Nome do Cliente",
    context: "Aniversário de 15 anos",
    quote:
      "PLACEHOLDER — substitua por um depoimento real sobre uma festa de aniversário, mencionando a estrutura ou a piscina.",
    initials: "NC",
  },
  {
    name: "Nome do Cliente",
    context: "Confraternização de empresa",
    quote:
      "PLACEHOLDER — substitua por um depoimento real de um evento corporativo, destacando o ambiente e a localização.",
    initials: "NC",
  },
]

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem viveu, recomenda"
          description="Momentos reais de quem escolheu o Sítio Garcia para celebrar"
        />

        <div className="max-w-3xl mx-auto">
          <Carousel setApi={setApi} opts={{ loop: true }} className="px-2">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <Card className="border-border/50 shadow-[var(--shadow-soft)]">
                    <CardContent className="pt-2 text-center">
                      <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" aria-hidden="true" />
                      <p className="font-[var(--font-lato)] text-lg lg:text-xl text-foreground leading-relaxed mb-6 text-balance">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {t.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{t.name}</p>
                          <p className="font-[var(--font-lato)] text-sm text-muted-foreground">{t.context}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>

          {/* Paginação */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${current === i ? "w-6 bg-primary" : "w-2 bg-primary/30"}`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
