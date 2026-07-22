"use client"

import { Trees, Home, Car, Users, Leaf } from "lucide-react"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, staggerItem } from "@/components/motion/stagger"

const features = [
  {
    icon: Trees,
    title: "Espaço Amplo",
    description: "Área externa generosa para eventos ao ar livre com vista para a natureza",
  },
  {
    icon: Home,
    title: "Área Coberta",
    description: "Salão elegante e confortável para recepções em qualquer clima",
  },
  {
    icon: Car,
    title: "Estacionamento",
    description: "Amplo espaço para estacionamento de veículos de todos os convidados",
  },
  {
    icon: Users,
    title: "Ambiente Familiar",
    description: "Estrutura segura e acolhedora para eventos com crianças e famílias",
  },
  {
    icon: Leaf,
    title: "Natureza e Tranquilidade",
    description: "Cercado de verde, ar puro e a serenidade do campo",
  },
]

export function Features() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher o Sítio Garcia?"
          description="Oferecemos uma experiência completa para tornar seu evento inesquecível"
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border border-border/50"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="font-[var(--font-lato)] text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
