import {isValidSignature, SIGNATURE_HEADER_NAME} from '@sanity/webhook';
import type {NextApiRequest, NextApiResponse} from 'next';

const secret = process.env.SANITY_WEBHOOK_SECRET_CAROUSEL!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(401).json({message: 'Must be a POST request'});
  }

  const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString() || '';
  if (!isValidSignature(JSON.stringify(req.body), signature, secret)) {
    return res.status(401).json({message: 'Invalid signature'});
  }

  try {
    await res.revalidate('/');
    console.log('Revalidated [carousel]');
    return res.json({revalidated: true});
  } catch (err) {
    console.log('Error revalidating [carousel]: ', err);
    return res.status(500).send({message: 'Error revalidating'});
  }
}
