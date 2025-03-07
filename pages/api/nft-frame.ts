import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Always set content type
  res.setHeader('Content-Type', 'text/html');

  // Simple HTML response
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>NFT Frame</title>
      </head>
      <body>
        <h1>Tellr NFT Frame</h1>
        <p>API Route is Working</p>
      </body>
    </html>
  `;

  // Send response for both GET and POST
  res.status(200).send(html);
}
