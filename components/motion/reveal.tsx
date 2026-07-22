"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"

type RevealProps = {
  children: ReactNode
  /** Atraso em segundos antes da animação começar (útil para orquestrar entradas em sequência). */
  delay?: number
  duration?: number
  /** Distância (em px) de onde o elemento "cai" ao entrar. Use negativo para entrar de baixo para cima. */
  y?: number
  /** Distância horizontal (em px). Combine com `y={0}` para uma entrada lateral. */
  x?: number
  /** Se a animação deve rodar só uma vez (padrão) ou toda vez que o elemento entra na tela. */
  once?: boolean
  className?: string
}

/**
 * Anima a entrada de qualquer bloco de conteúdo quando ele entra na viewport
 * durante o scroll. Envolve `children` num único wrapper — não precisa que a
 * seção que o usa seja um Client Component: o limite "use client" fica
 * isolado aqui dentro.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  x = 0,
  once = true,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y, x: reduceMotion ? 0 : x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
