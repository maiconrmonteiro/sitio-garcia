"use client"

import { useEffect, useState } from "react"

/**
 * Observa um conjunto de ids de seção e retorna qual está mais visível na
 * viewport no momento — usado pelo Header para destacar o link ativo no
 * menu conforme o usuário rola a página.
 */
export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")])

  return activeId
}
