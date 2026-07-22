"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "motion/react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Vista aérea do Sítio Garcia"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center text-card"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-6 text-balance"
        >
          O cenário perfeito para o seu evento inesquecível
        </motion.h1>
        <motion.p
          variants={item}
          className="font-[var(--font-lato)] text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-3xl mx-auto text-card/90"
        >
          Casamentos, aniversários e momentos especiais em meio à natureza
        </motion.p>
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="font-[var(--font-lato)] text-base px-8 py-6">
            <Link href="#contato">Solicitar Orçamento</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-[var(--font-lato)] text-base px-8 py-6 bg-transparent border-card text-card hover:bg-card hover:text-foreground"
          >
            <Link href="#galeria">Ver Galeria</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#sobre" aria-label="Rolar para baixo">
          <ChevronDown className="w-8 h-8 text-card/80" />
        </Link>
      </div>
    </section>
  )
}
