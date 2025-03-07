import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Comprehensive headers for image access
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  
  // Standardized image URL (ensure it's a direct image link)
  const imageUrl = 'https://ipfs.io/ipfs/QmUPcU38pgfoGsAumw16ZkRNYzc2euwXKNGaybPYhmcJJ2';

  // GET Request
  if (req.method === 'GET') {
    const frameHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Tellr NFT Marketplace</title>
          <meta property="og:title" content="Tellr NFT Marketplace" />
          <meta property="og:image" content="${imageUrl}" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${imageUrl}" />
          <meta property="fc:frame:post_url" content="https://tellr-frame.vercel.app/api/nft-frame" />
          <meta property="fc:frame:button:1" content="Marketplace" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981909261913245130952709265776" />
          <meta property="fc:frame:button:2" content="Purchase" />
          <meta property="fc:frame:button:2:action" content="link" />
          <meta property="fc:frame:button:2:target" content="https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981909261913245130952709265776" />
        </head>
      </html>
    `;

    res.status(200).send(frameHTML);
  }

  // POST Request
  if (req.method === 'POST') {
    const frameHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Tellr NFT Marketplace</title>
          <meta property="og:title" content="Tellr NFT Marketplace" />
          <meta property="og:image" content="${imageUrl}" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${imageUrl}" />
          <meta property="fc:frame:post_url" content="https://tellr-frame.vercel.app/api/nft-frame" />
          <meta property="fc:frame:button:1" content="Marketplace" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981898899930887041058161955700" />
          <meta property="fc:frame:button:2" content="Purchase" />
          <meta property="fc:frame:button:2:action" content="link" />
          <meta property="fc:frame:button:2:target" content="https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981898899930887041058161955700" />
        </head>
      </html>
    `;

    res.status(200).send(frameHTML);
  }

  // Handle other methods
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
