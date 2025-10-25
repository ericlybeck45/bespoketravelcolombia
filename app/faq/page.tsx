import businesses from '../../data/businesses.json';
import { JsonLd } from '../../components/JsonLd';
import Head from 'next/head';

const faqs = businesses.businesses[0].faqs;

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>Colombia Travel FAQ – Bespoke Travel & Tours</title>
        <meta name="description" content="Answers to your top questions about travel safety and costs in Colombia, from Bespoke Travel & Tours of Colombia." />
        <meta property="og:title" content="Colombia Travel FAQ" />
        <meta property="og:description" content="Colombia travel tips for U.S. tourists. Safety, tour pricing, and more!" />
      </Head>
      <main>
        <h1>Frequently Asked Questions</h1>
        <ul>
          {faqs.map((faq, idx) => (
            <li key={idx}>
              <strong>{faq.q}</strong>
              <p>{faq.a}</p>
            </li>
          ))}
        </ul>
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        }} />
      </main>
    </>
  );
}
