import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import { JsonLd } from '@/components/json-ld'
import { siteConfig } from '@/lib/site-config'
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
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Espaço para Eventos em Meio à Natureza`,
  description: siteConfig.description,
  keywords: ['sítio para eventos', 'casamento no campo', 'espaço para festas', 'aniversário', 'eventos corporativos', 'confraternização'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} | Espaço para Eventos`,
    description: 'O cenário perfeito para seu evento inesquecível em meio à natureza.',
    type: 'website',
    url: siteConfig.url,
    locale: 'pt_BR',
    images: [{ url: '/images/hero.jpg', width: 1024, height: 1024, alt: siteConfig.name }],
  },
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
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
        <Toaster position="top-center" richColors />
        <JsonLd />
        <Analytics />
      </body>
    </html>
  )
}
