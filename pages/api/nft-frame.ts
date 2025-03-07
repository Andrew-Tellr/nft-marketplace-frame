import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Always set content type for Farcaster Frame
  res.setHeader('Content-Type', 'text/html');

  // GET Request Handler
  if (req.method === 'GET') {
    const frameResponse = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://liteflow.mypinata.cloud/ipfs/QmUPcU38pgfoGsAumw16ZkRNYzc2euwXKNGaybPYhmcJJ2" />
          <meta property="fc:frame:post_url" content="https://tellr-frame.vercel.app/api/nft-frame" />
          <meta property="fc:frame:button:1" content="🔍 Marketplace" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981909261913245130952709265776" />
          <meta property="fc:frame:button:2" content="💰 Purchase" />
          <meta property="fc:frame:button:2:action" content="link" />
          <meta property="fc:frame:button:2:target" content="https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981909261913245130952709265776" />
        </head>
      </html>
    `;

    res.status(200).send(frameResponse);
  }

  // POST Request Handler
  if (req.method === 'POST') {
    const responseHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://liteflow.mypinata.cloud/ipfs/QmP5bxh4KFH3Xe59wbMcWLuQYAAveTtx9iumu2gqdR5r4Y" />
          <meta property="fc:frame:post_url" content="https://tellr-frame.vercel.app/api/nft-frame" />
          <meta property="fc:frame:button:1" content="🔍 Marketplace" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981898899930887041058161955700" />
          <meta property="fc:frame:button:2" content="💰 Purchase" />
          <meta property="fc:frame:button:2:action" content="link" />
          <meta property="fc:frame:button:2:target" content="https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981898899930887041058161955700" />
        </head>
      </html>
    `;

    res.status(200).send(responseHTML);
  }
}
