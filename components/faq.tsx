import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"

// Perguntas frequentes — ajuste livremente conforme as regras reais do
// Sítio Garcia (horários, capacidade, política de cancelamento, etc.).
const faqs = [
  {
    question: "Qual a capacidade máxima de convidados?",
    answer:
      "O espaço comporta confortavelmente eventos de diferentes portes, com área coberta para as recepções e ampla área externa para os demais convidados. Entre em contato pelo WhatsApp informando o número estimado de convidados para confirmarmos a melhor configuração.",
  },
  {
    question: "O que está incluso na locação do espaço?",
    answer:
      "A locação inclui a área coberta para festas, churrasqueira equipada, cozinha de apoio, piscina, campo de futebol gramado, quadra de vôlei e estacionamento privativo. Mobiliário, decoração e buffet podem ser contratados à parte ou trazidos por fornecedores externos.",
  },
  {
    question: "É permitido levar decoração e fornecedores próprios?",
    answer:
      "Sim. Você pode contratar os fornecedores de sua preferência (decoração, buffet, som, fotografia) ou pedir indicações de parceiros que já conhecem o espaço.",
  },
  {
    question: "Qual o horário de uso do espaço?",
    answer:
      "Os horários de entrada e saída são combinados de acordo com o tipo de evento e a data escolhida. Fale conosco pelo WhatsApp para verificar a disponibilidade e os horários da sua data.",
  },
  {
    question: "Como funciona a reserva e o sinal de pagamento?",
    answer:
      "A reserva é feita mediante o pagamento de um sinal para garantir a data, com o restante combinado conforme a proximidade do evento. Envie sua data desejada pelo WhatsApp para receber as condições atualizadas.",
  },
  {
    question: "O espaço tem estrutura para dias de chuva?",
    answer:
      "Sim, a área coberta é ampla e preparada para receber a recepção mesmo em dias de chuva, garantindo que a festa aconteça sem imprevistos.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Dúvidas Frequentes"
          title="Perguntas frequentes"
          description="Tudo o que você precisa saber antes de reservar o seu evento"
        />

        <div className="max-w-3xl mx-auto bg-card rounded-2xl px-6 lg:px-8 shadow-[var(--shadow-soft)]">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base lg:text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-[var(--font-lato)] text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
