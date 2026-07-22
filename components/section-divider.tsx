type SectionDividerProps = {
  flip?: boolean
  className?: string
}

/**
 * Divisor orgânico em SVG (onda), usado nas costuras entre seções de cores
 * diferentes para reforçar a identidade "sítio"/natureza. A cor vem de
 * `currentColor`: envolva com uma classe de texto que combine com o fundo
 * da seção que vem A SEGUIR (ex: `<div className="text-secondary">`).
 *
 * Deliberadamente não é usado entre todas as seções — só em 1-2 costuras
 * estratégicas, para ser pontuação visual, não um padrão repetitivo.
 */
export function SectionDivider({ flip = false, className }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className ?? ""}`}
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-12 md:h-20" fill="currentColor">
        <path d="M0,40 C320,100 720,0 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>
  )
}
