"use client"

import { MessageCircle } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { buildWhatsappUrl } from "@/lib/site-config"

export function WhatsAppButton() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-300 group"
      aria-label="Fale conosco pelo WhatsApp"
      whileHover={reduceMotion ? undefined : { scale: 1.1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 bg-foreground text-card text-sm font-[var(--font-lato)] px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Fale conosco
      </span>
    </motion.a>
  )
}
