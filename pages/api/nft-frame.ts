import type { NextApiRequest, NextApiResponse } from 'next'

// NFT Interface
interface NFT {
  id: string;
  name: string;
  imageUrl: string;
  videoUrl: string;
  contractAddress: string;
  tokenId: string;
  baseLink: string;
  marketplaceLink: string;
  purchaseLink: string;
}

// Your NFT Collection
const NFT_COLLECTION: NFT[] = [
  {
    id: 'BL-034',
    name: 'BL-034',
    imageUrl: 'https://liteflow.mypinata.cloud/ipfs/QmUPcU38pgfoGsAumw16ZkRNYzc2euwXKNGaybPYhmcJJ2',
    videoUrl: 'https://liteflow.mypinata.cloud/ipfs/QmUPcU38pgfoGsAumw16ZkRNYzc2euwXKNGaybPYhmcJJ2',
    contractAddress: '0x21A6dD67524b378CAd5E3Cb16EAfa8344A309638',
    tokenId: '61893967719372861411856819925985705033858036353981909261913245130952709265776',
    baseLink: 'https://basescan.org/token/0x21a6dd67524b378cad5e3cb16eafa8344a309638?a=61893967719372861411856819925985705033858036353981909261913245130952709265776',
    marketplaceLink: 'https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981909261913245130952709265776',
    purchaseLink: 'https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981909261913245130952709265776'
  },
  {
    id: 'BL-007',
    name: 'BL-007',
    imageUrl: 'https://liteflow.mypinata.cloud/ipfs/QmP5bxh4KFH3Xe59wbMcWLuQYAAveTtx9iumu2gqdR5r4Y',
    videoUrl: 'https://liteflow.mypinata.cloud/ipfs/QmP5bxh4KFH3Xe59wbMcWLuQYAAveTtx9iumu2gqdR5r4Y',
    contractAddress: '0x21A6dD67524b378CAd5E3Cb16EAfa8344A309638',
    tokenId: '61893967719372861411856819925985705033858036353981898899930887041058161955700',
    baseLink: 'https://basescan.org/token/0x21a6dd67524b378cad5e3cb16eafa8344a309638?a=61893967719372861411856819925985705033858036353981898899930887041058161955700',
    marketplaceLink: 'https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981898899930887041058161955700',
    purchaseLink: 'https://gallery.tellr.xyz/tokens/8453-0x21a6dd67524b378cad5e3cb16eafa8344a309638-61893967719372861411856819925985705033858036353981898899930887041058161955700'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET Request - Display Initial NFT Frame
  if (req.method === 'GET') {
    const nftIndex = Number(req.query.index || 0);
    const currentNFT = NFT_COLLECTION[nftIndex] || NFT_COLLECTION[0];

    const frameHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>NFT Marketplace Frame</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${currentNFT.imageUrl}" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_FRAME_URL}/api/nft-frame?index=${nftIndex}" />
          <meta property="fc:frame:button:1" content="🔍 Marketplace" />
          <meta property="fc:frame:button:2" content="💰 Purchase" />
          <meta property="fc:frame:button:3" content="➡️ Next NFT" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="${currentNFT.marketplaceLink}" />
          <meta property="fc:frame:button:2:action" content="link" />
          <meta property="fc:frame:button:2:target" content="${currentNFT.purchaseLink}" />
        </head>
        <body>
          <h1>${currentNFT.name}</h1>
          <video width="300" controls>
            <source src="${currentNFT.videoUrl}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </body>
      </html>
    `;

    res.status(200).send(frameHTML);
  }

  // POST Request - Handle Frame Interactions
  if (req.method === 'POST') {
    const nftIndex = Number(req.query.index || 0);
    
    // Cycle to next NFT
    const nextIndex = (nftIndex + 1) % NFT_COLLECTION.length;
    const nextNFT = NFT_COLLECTION[nextIndex];

    const responseHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>NFT Marketplace Frame</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${nextNFT.imageUrl}" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_FRAME_URL}/api/nft-frame?index=${nextIndex}" />
          <meta property="fc:frame:button:1" content="🔍 Marketplace" />
          <meta property="fc:frame:button:2" content="💰 Purchase" />
          <meta property="fc:frame:button:3" content="➡️ Next NFT" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="${nextNFT.marketplaceLink}" />
          <meta property="fc:frame:button:2:action" content="link" />
          <meta property="fc:frame:button:2:target" content="${nextNFT.purchaseLink}" />
        </head>
      </html>
    `;

    res.status(200).send(responseHTML);
  }
}
