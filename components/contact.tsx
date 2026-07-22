"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    eventType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Gostaria de solicitar um orçamento para o Sítio Garcia.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nData do evento: ${formData.date}\nTipo de evento: ${formData.eventType}`
    const whatsappUrl = `https://wa.me/5548999557220?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-card rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-card rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-[var(--font-lato)] text-primary-foreground/80 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 text-balance">
              Solicite seu orçamento
            </h2>
            <p className="font-[var(--font-lato)] text-primary-foreground/80 text-lg">
              Preencha o formulário abaixo e entraremos em contato rapidamente
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-[var(--font-lato)] text-sm font-medium text-foreground">
                  Nome completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-[var(--font-lato)]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="font-[var(--font-lato)] text-sm font-medium text-foreground">
                  Telefone / WhatsApp
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="font-[var(--font-lato)]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="font-[var(--font-lato)] text-sm font-medium text-foreground">
                  Data do evento
                </label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="font-[var(--font-lato)]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="eventType" className="font-[var(--font-lato)] text-sm font-medium text-foreground">
                  Tipo de evento
                </label>
                <select
                  id="eventType"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="font-[var(--font-lato)] flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Casamento">Casamento</option>
                  <option value="Aniversário">Aniversário</option>
                  <option value="Evento Corporativo">Evento Corporativo</option>
                  <option value="Confraternização">Confraternização</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div>
              <Button type="submit" size="lg" className="w-full font-[var(--font-lato)]">
                <Send className="w-4 h-4 mr-2" />
                Enviar Solicitação
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
