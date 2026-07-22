import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Sítio Garcia | Espaço para Eventos em Meio à Natureza',
  description: 'O cenário perfeito para casamentos, aniversários e eventos especiais. Espaço amplo com piscina, área coberta e contato direto com a natureza.',
  keywords: ['sítio para eventos', 'casamento no campo', 'espaço para festas', 'aniversário', 'eventos corporativos', 'confraternização'],
  openGraph: {
    title: 'Sítio Garcia | Espaço para Eventos',
    description: 'O cenário perfeito para seu evento inesquecível em meio à natureza.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#4a7c59',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
