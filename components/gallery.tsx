"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

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

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-[var(--font-lato)] text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Conheça nosso espaço
          </h2>
          <p className="font-[var(--font-lato)] text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore imagens do nosso sítio e veja por que somos a escolha perfeita para seu
            próximo evento
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`gallery-item relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 || index === 5 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-card font-[var(--font-lato)] text-sm">{image.alt}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-card hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl w-full aspect-video">
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
