import type { Variants } from "motion/react"

/**
 * Variants "crus" (não um componente wrapper) para orquestrar a entrada
 * escalonada de itens dentro de um grid. Os itens de cada seção (Card, Link,
 * div...) variam demais para caber num único componente genérico, então o
 * padrão de uso é:
 *
 *   <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
 *     {items.map((item) => (
 *       <motion.div key={item.id} variants={staggerItem}>...</motion.div>
 *     ))}
 *   </motion.div>
 *
 * Respeitar `prefers-reduced-motion` aqui é redundante com a guarda CSS
 * global em app/globals.css (que zera durações de transição/animação), mas
 * o deslocamento inicial (`y: 20`) de `staggerItem` já é sutil o bastante
 * para não incomodar mesmo sem essa guarda.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}
