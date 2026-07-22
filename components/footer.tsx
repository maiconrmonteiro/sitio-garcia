import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Sítio Garcia"
              width={120}
              height={120}
              className="mb-6"
            />
            <p className="font-[var(--font-lato)] text-card/80 text-lg max-w-md">
              Transformando momentos em memórias inesquecíveis
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xl mb-6">Contato</h4>
            <ul className="font-[var(--font-lato)] space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+5548999557220" className="text-card/80 hover:text-primary transition-colors">
                  (48) 99955-7220
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-card/80">
                  Rua Elesbão Miguel Cardoso, s/n<br />
                  Bairro Santa Catarina - Biguaçu, SC
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-xl mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[var(--font-lato)] text-card/60 text-sm">
            &copy; {new Date().getFullYear()} Sítio Garcia. Todos os direitos reservados.
          </p>
          <nav className="font-[var(--font-lato)] flex gap-6 text-sm">
            <Link href="#sobre" className="text-card/60 hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#galeria" className="text-card/60 hover:text-primary transition-colors">
              Galeria
            </Link>
            <Link href="#contato" className="text-card/60 hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
