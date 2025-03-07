import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Always send HTML content type
  res.setHeader('Content-Type', 'text/html');
  
  // Ensure wide-open CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Handle OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // GET Request
  if (req.method === 'GET') {
    const frameResponse = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Test Frame</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://i.imgur.com/7fh6Ata.png" />
          <meta property="fc:frame:post_url" content="https://tellr-frame.vercel.app/api/nft-frame" />
          <meta property="fc:frame:button:1" content="Click Me" />
        </head>
      </html>
    `;

    res.status(200).send(frameResponse);
  }

  // POST Request
  if (req.method === 'POST') {
    const responseHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Test Frame Response</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://i.imgur.com/7fh6Ata.png" />
          <meta property="fc:frame:post_url" content="https://tellr-frame.vercel.app/api/nft-frame" />
          <meta property="fc:frame:button:1" content="Reset" />
        </head>
      </html>
    `;

    res.status(200).send(responseHTML);
  }

  // Catch-all for other methods
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
