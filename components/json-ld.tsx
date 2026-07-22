import { siteConfig } from "@/lib/site-config"

/** Marcação estruturada schema.org (EventVenue) para SEO — montada uma vez no layout, já que o site é de página única. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.whatsapp.tel,
    image: [
      `${siteConfig.url}/images/hero.jpg`,
      `${siteConfig.url}/images/venue.jpg`,
      `${siteConfig.url}/images/pool.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
