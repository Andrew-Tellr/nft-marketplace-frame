import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tellr NFT Marketplace Frame</title>
        <meta name="description" content="Farcaster Frame for Tellr NFT Marketplace" />
      </Head>

      <main>
        <h1>Tellr NFT Marketplace Frame</h1>
        <p>Farcaster Frame is active and ready to use!</p>
        <p>API Endpoint: /api/nft-frame</p>
      </main>
    </div>
  );
}
