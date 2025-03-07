import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT Marketplace Frame</title>
        <meta name="description" content="Farcaster NFT Marketplace Frame" />
      </Head>

      <main>
        <h1>NFT Marketplace Frame</h1>
        <p>Frame is active and ready to use!</p>
        <p>API endpoint: /api/nft-frame</p>
      </main>
    </div>
  );
}
