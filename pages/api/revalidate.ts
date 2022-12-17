// import {isValidRequest} from '@sanity/webhook';
import type {NextApiRequest, NextApiResponse} from 'next';

const secret = process.env.SANITY_WEBHOOK_SECRET!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('req', req);
  if (req.method !== 'POST') {
    console.error('Must be a POST request');
    return res.status(401).json({message: 'Must be a POST request'});
  }

  // if (!isValidRequest(req, secret)) {
  //   return res.status(401).json({message: 'Invalid signature'});
  // }

  try {
    const pathToRevalidate = req.body.slug.current;
    console.log(`===== Revalidating: ${pathToRevalidate}`);
    await res.revalidate(`/work/${pathToRevalidate}`);
    return res.json({revalidated: true});
  } catch (err) {
    return res.status(500).send({message: 'Error revalidating'});
  }
}
