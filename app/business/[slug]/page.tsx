import { NapBlock } from '../../../components/NapBlock';
import { JsonLd } from '../../../components/JsonLd';
import businesses from '../../../data/businesses.json';
import Head from 'next/head';

const business = businesses.businesses[0];
const images = business.images;

export default function BusinessProfile() {
  return (
    <>
      <Head>
        <title>{business.name} – Palm Springs, CA</title>
        <meta name="description" content={business.valueProposition} />
        <meta property="og:title" content={business.name} />
        <meta property="og:description" content={business.valueProposition} />
        <meta property="og:image" content={images[0].src} />
      </Head>
      <main>
        <h1>{business.name} in Palm Springs, CA</h1>
        <NapBlock contact={business.contact} />
        <a href={business.googleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        <section>
          <h2>About</h2>
          <p>{business.valueProposition} Serving clients across the United States.</p>
        </section>
        <section>
          <h2>FAQ</h2>
          <ul>
            {business.faqs.map((faq, idx) => (
              <li key={idx}>
                <strong>{faq.q}</strong>
                <p>{faq.a}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Featured Destinations</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {images.map((img, idx) => (
              <img key={idx} src={img.src} alt={img.alt} width={300} height={200} style={{objectFit: 'cover', borderRadius: 8}} />
            ))}
          </div>
        </section>
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": business.name,
          "url": `https://bespoketravelcolombia.com/business/${business.slug}`,
          "image": images.map(img => `https://bespoketravelcolombia.com${img.src}`),
          "description": business.valueProposition,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": business.contact.address.street,
            "addressLocality": business.contact.address.city,
            "addressRegion": business.contact.address.state,
            "postalCode": business.contact.address.postalCode,
            "addressCountry": "US"
          },
          "telephone": business.contact.phone,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": business.contact.email,
            "telephone": business.contact.phone
          },
          "areaServed": business.areaServed,
          "openingHours": business.hours,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.8103,
            "longitude": -116.5442
          },
        }} />
      </main>
    </>
  );
}
