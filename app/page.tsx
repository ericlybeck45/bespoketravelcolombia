import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bespoke Travel & Tours of Colombia – U.S. to Colombia’s Trusted Experts</title>
        <meta name="description" content="Plan your dream trip to Colombia. 25 years of travel expertise, based in Palm Springs, CA. Safe, affordable, custom tours with local insight." />
        <meta property="og:title" content="Bespoke Travel & Tours of Colombia" />
        <meta property="og:description" content="Your U.S.–Colombia travel specialists. Trust 25 years of travel planning excellence!" />
      </Head>
      <main>
        <h1>Welcome to Bespoke Travel & Tours of Colombia</h1>
        <p>We make your journey to Colombia easy, safe, and unforgettable, with 25 years’ experience & local connections.</p>
        <nav>
          <ul>
            <li><Link href="/business/bespoke-travel-tours-colombia">Business Profile</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </nav>
      </main>
    </>
  );
}
