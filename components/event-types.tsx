import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const eventTypes = [
  {
    title: "Casamentos",
    description: "Realize o casamento dos seus sonhos em um cenário encantador",
    image: "/images/wedding.jpg",
  },
  {
    title: "Aniversários",
    description: "Comemore datas especiais com festa e alegria em meio à natureza",
    image: "/images/birthday.jpg",
  },
  {
    title: "Eventos Corporativos",
    description: "Ambiente inspirador para reuniões, treinamentos e team building",
    image: "/images/corporate.jpg",
  },
  {
    title: "Confraternizações",
    description: "O lugar perfeito para reunir amigos e família",
    image: "/images/party.jpg",
  },
]

export function EventTypes() {
  return (
    <section id="eventos" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-[var(--font-lato)] text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Tipos de Eventos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Que evento você deseja realizar?
          </h2>
          <p className="font-[var(--font-lato)] text-muted-foreground text-lg max-w-2xl mx-auto">
            Temos estrutura e experiência para diversos tipos de celebrações
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event, index) => (
            <Link
              key={index}
              href="#contato"
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="font-[var(--font-lato)] text-card/80 text-sm mb-4">
                  {event.description}
                </p>
                <span className="font-[var(--font-lato)] inline-flex items-center text-sm font-medium text-primary-foreground group-hover:underline">
                  Solicitar orçamento
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
