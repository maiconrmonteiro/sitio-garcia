/**
 * Configuração central do site — nome, contato, endereço e navegação.
 *
 * Isto NÃO é um banco de dados: é apenas um objeto TypeScript estático,
 * a única fonte de verdade para dados que hoje estavam duplicados em
 * vários componentes (o número de WhatsApp, por exemplo, aparecia em
 * contact.tsx, whatsapp-button.tsx e footer.tsx). Para alterar telefone,
 * endereço ou links, edite apenas este arquivo.
 */

// TODO: preencher com o domínio de produção definitivo assim que estiver
// disponível (usado em metadata, sitemap.xml, robots.txt e JSON-LD).
const SITE_URL = "https://sitiogarcia.com.br"

export const siteConfig = {
  name: "Sítio Garcia",
  shortName: "Sítio Garcia",
  tagline: "O cenário perfeito para o seu evento inesquecível",
  description:
    "O cenário perfeito para casamentos, aniversários e eventos especiais. Espaço amplo com piscina, área coberta e contato direto com a natureza.",
  url: SITE_URL,
  themeColor: "#3f6a4c",

  whatsapp: {
    numberIntl: "5548999557220",
    tel: "+5548999557220",
    display: "(48) 99955-7220",
    defaultMessage: "Olá! Gostaria de mais informações sobre o Sítio Garcia.",
  },

  address: {
    street: "Rua Elesbão Miguel Cardoso, s/n",
    neighborhood: "Bairro Santa Catarina",
    city: "Biguaçu",
    state: "SC",
    country: "BR",
    landmark: "Ao lado da nova subestação da Eletrosul",
    lat: -27.4840043,
    lng: -48.7346062,
    mapsEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5!2d-48.7346062!3d-27.4840043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI5JzAyLjQiUyA0OMKwNDQnMDQuNiJX!5e0!3m2!1spt-BR!2sbr",
    mapsDirectionsUrl: "https://www.google.com/maps?q=-27.4840043,-48.7346062&z=17&hl=pt-BR",
  },

  social: {
    // TODO: confirmar os handles reais das redes sociais do Sítio Garcia.
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },

  nav: [
    { href: "#sobre", label: "Sobre" },
    { href: "#galeria", label: "Galeria" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#eventos", label: "Eventos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
    { href: "#localizacao", label: "Localização" },
    { href: "#contato", label: "Contato" },
  ],
} as const

/** Monta a URL do wa.me com uma mensagem já preenchida e codificada. */
export function buildWhatsappUrl(message: string = siteConfig.whatsapp.defaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp.numberIntl}?text=${encodeURIComponent(message)}`
}
