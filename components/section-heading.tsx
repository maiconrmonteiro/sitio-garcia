import { Reveal } from "@/components/motion/reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
}

/** Cabeçalho padronizado (rótulo + título + descrição) usado na maioria das seções. */
export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center mb-16" : "mb-8"}>
      <span className="text-eyebrow">{eyebrow}</span>
      <h2 className="heading-section">{title}</h2>
      {description && (
        <p className={align === "center" ? "text-lede" : "font-[var(--font-lato)] text-muted-foreground text-lg"}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
