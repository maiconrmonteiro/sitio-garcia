"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion } from "motion/react"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, staggerItem } from "@/components/motion/stagger"

// Para adicionar uma nova foto à galeria:
// 1) salve o arquivo em /public/images/
// 2) adicione um objeto abaixo com { src, alt, category }
//    "category" precisa ser um dos valores definidos em CATEGORIES logo após.
const images = [
  { src: "/images/hero.jpg", alt: "Vista aérea do Sítio Garcia", category: "drone" },
  { src: "/images/wedding.jpg", alt: "Casamento no Sítio Garcia", category: "eventos" },
  { src: "/images/pool.jpg", alt: "Piscina do Sítio Garcia", category: "estrutura" },
  { src: "/images/venue.jpg", alt: "Área coberta do Sítio Garcia", category: "estrutura" },
  { src: "/images/birthday.jpg", alt: "Festa de aniversário", category: "eventos" },
  { src: "/images/nature.jpg", alt: "Natureza no Sítio Garcia", category: "drone" },
  { src: "/images/corporate.jpg", alt: "Evento corporativo", category: "eventos" },
  { src: "/images/party.jpg", alt: "Confraternização", category: "eventos" },
]

const CATEGORIES = [
  { value: "todos", label: "Todos" },
  { value: "drone", label: "Drone" },
  { value: "estrutura", label: "Estrutura" },
  { value: "eventos", label: "Eventos" },
]

/** Posição do item que "ganha" destaque (2x2) no grid bento — calculado pela
 * posição na lista já filtrada, não por um índice fixo, para não quebrar o
 * layout quando fotos forem adicionadas/removidas. */
function getSpanClass(index: number) {
  const pos = index % 6
  return pos === 0 || pos === 3 ? "md:col-span-2 md:row-span-2" : ""
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("todos")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filtered = activeCategory === "todos" ? images : images.filter((img) => img.category === activeCategory)
  const selectedImage = selectedIndex !== null ? filtered[selectedIndex] : null

  const closeLightbox = () => setSelectedIndex(null)
  const showPrev = () => setSelectedIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
  const showNext = () => setSelectedIndex((i) => (i === null ? null : (i + 1) % filtered.length))

  useEffect(() => {
    if (selectedIndex === null) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, filtered.length])

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Galeria"
          title="Conheça nosso espaço"
          description="Explore imagens do nosso sítio e veja por que somos a escolha perfeita para seu próximo evento"
        />

        {/* Filtro por categoria */}
        <div className="flex justify-center mb-10">
          <ToggleGroup
            type="single"
            value={activeCategory}
            onValueChange={(value) => {
              if (!value) return
              setActiveCategory(value)
              setSelectedIndex(null)
            }}
            variant="outline"
            className="flex-wrap justify-center gap-2"
          >
            {CATEGORIES.map((cat) => (
              <ToggleGroupItem
                key={cat.value}
                value={cat.value}
                className="font-[var(--font-lato)] rounded-full! px-5 border! data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"
              >
                {cat.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filtered.map((image, index) => (
            <motion.button
              key={image.src}
              variants={staggerItem}
              onClick={() => setSelectedIndex(index)}
              className={`gallery-item relative overflow-hidden rounded-xl cursor-pointer ${getSpanClass(index)}`}
            >
              <div className={`relative ${getSpanClass(index) ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-card font-[var(--font-lato)] text-sm text-left">{image.alt}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent showCloseButton={false} className="max-w-5xl sm:max-w-5xl w-[95vw] p-0 border-none bg-transparent shadow-none">
          <DialogTitle className="sr-only">{selectedImage?.alt ?? "Imagem ampliada"}</DialogTitle>
          {selectedImage && (
            <div className="relative w-full aspect-video">
              <Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="95vw" className="object-contain" />

              <DialogClose asChild>
                <button
                  className="absolute -top-12 right-0 text-card hover:text-primary transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-8 h-8" />
                </button>
              </DialogClose>

              {filtered.length > 1 && (
                <>
                  <button
                    onClick={showPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-card transition-colors"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={showNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-card transition-colors"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/40 text-card text-sm font-[var(--font-lato)]">
                    {selectedIndex! + 1} / {filtered.length}
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
