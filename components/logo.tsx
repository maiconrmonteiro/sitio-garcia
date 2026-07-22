import { Leaf } from "lucide-react"

type LogoProps = {
  variant?: "header" | "footer"
  className?: string
}

/**
 * Wordmark tipográfico provisório do Sítio Garcia — usado enquanto a logo
 * definitiva não chega. Usa `text-current`/`currentColor` de propósito para
 * herdar a cor do elemento pai (funciona tanto no header claro/transparente
 * quanto sobre o fundo escuro do footer) sem precisar de props de tema extras.
 *
 * QUANDO A LOGO DEFINITIVA CHEGAR: salve o arquivo em public/images/ (ex:
 * "logo.png") e troque o conteúdo deste componente por um <Image> apontando
 * para ele, mantendo o mesmo container/altura para não quebrar o layout do
 * Header e do Footer que consomem <Logo />.
 */
export function Logo({ variant = "header", className }: LogoProps) {
  const isFooter = variant === "footer"

  return (
    <span
      className={`inline-flex items-center gap-2 text-current font-semibold tracking-wide ${
        isFooter ? "text-3xl" : "text-xl sm:text-2xl"
      } ${className ?? ""}`}
    >
      <Leaf className={isFooter ? "w-7 h-7 text-primary" : "w-5 h-5 sm:w-6 sm:h-6 text-primary"} aria-hidden="true" />
      Sítio Garcia
    </span>
  )
}
