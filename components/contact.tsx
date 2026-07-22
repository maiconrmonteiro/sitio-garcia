"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { buildWhatsappUrl, siteConfig } from "@/lib/site-config"

const EVENT_TYPES = ["Casamento", "Aniversário", "Evento Corporativo", "Confraternização", "Outro"]

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  phone: z.string().min(10, "Informe um telefone válido com DDD"),
  date: z.string().min(1, "Selecione a data do evento"),
  eventType: z.string().min(1, "Selecione o tipo de evento"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", date: "", eventType: "" },
  })

  function onSubmit(values: ContactFormValues) {
    const message = `Olá! Gostaria de solicitar um orçamento para o ${siteConfig.name}.\n\nNome: ${values.name}\nTelefone: ${values.phone}\nData do evento: ${values.date}\nTipo de evento: ${values.eventType}`

    // Abre o WhatsApp com a mensagem pronta — sem backend, sem banco de
    // dados. window.open precisa continuar sendo chamado aqui dentro do
    // próprio handler de envio para não ser bloqueado como pop-up.
    window.open(buildWhatsappUrl(message), "_blank")
    toast.success("Solicitação enviada!", {
      description: "Continue a conversa que abrimos no WhatsApp para finalizar seu orçamento.",
    })
    form.reset()
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

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-card rounded-2xl p-8 shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[var(--font-lato)] text-sm font-medium text-foreground">
                        Nome completo
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" className="font-[var(--font-lato)]" {...field} />
                      </FormControl>
                      <FormMessage className="font-[var(--font-lato)]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[var(--font-lato)] text-sm font-medium text-foreground">
                        Telefone / WhatsApp
                      </FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(00) 00000-0000" className="font-[var(--font-lato)]" {...field} />
                      </FormControl>
                      <FormMessage className="font-[var(--font-lato)]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[var(--font-lato)] text-sm font-medium text-foreground">
                        Data do evento
                      </FormLabel>
                      <FormControl>
                        <Input type="date" className="font-[var(--font-lato)]" {...field} />
                      </FormControl>
                      <FormMessage className="font-[var(--font-lato)]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[var(--font-lato)] text-sm font-medium text-foreground">
                        Tipo de evento
                      </FormLabel>
                      <FormControl>
                        <select
                          className="font-[var(--font-lato)] flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive"
                          {...field}
                        >
                          <option value="">Selecione o tipo</option>
                          {EVENT_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage className="font-[var(--font-lato)]" />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-[var(--font-lato)]"
                disabled={form.formState.isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Solicitação
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
