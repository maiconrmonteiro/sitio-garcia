"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, staggerItem } from "@/components/motion/stagger"

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
        <SectionHeading
          eyebrow="Tipos de Eventos"
          title="Que evento você deseja realizar?"
          description="Temos estrutura e experiência para diversos tipos de celebrações"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {eventTypes.map((event) => (
            <motion.div key={event.title} variants={staggerItem}>
              <Link
                href="#contato"
                className="group relative block overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
