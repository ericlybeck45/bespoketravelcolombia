import React from 'react';
import Head from 'next/head';

export const JsonLd = ({ data }: { data: object }) => (
  <Head>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  </Head>
);
