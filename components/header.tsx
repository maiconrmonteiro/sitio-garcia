"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { siteConfig } from "@/lib/site-config"

const sectionIds = siteConfig.nav.map((link) => link.href.slice(1))

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-[var(--shadow-soft)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className={`relative z-10 transition-colors ${isScrolled ? "text-foreground" : "text-card"}`}
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.nav.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-[var(--font-lato)] text-base font-semibold tracking-wide transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary"
                    : isScrolled
                      ? "text-foreground"
                      : "text-card"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            )
          })}
          <Button asChild className="font-[var(--font-lato)]">
            <Link href="#contato">Solicitar Orçamento</Link>
          </Button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          className="lg:hidden relative z-10 p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-card"}`} />
        </button>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="right" className="w-full sm:max-w-sm px-6">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {siteConfig.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-[var(--font-lato)] text-xl font-medium transition-colors hover:text-primary ${
                    activeId === link.href.slice(1) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-4 font-[var(--font-lato)]">
                <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
