import {isValidSignature, SIGNATURE_HEADER_NAME} from '@sanity/webhook';
import type {NextApiRequest, NextApiResponse} from 'next';

const secret = process.env.SANITY_WEBHOOK_SECRET!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('req.method: ', req.method);
  if (req.method !== 'POST') {
    return res.status(401).json({message: 'Must be a POST request'});
  }

  console.log('req.headers: ', req.headers);
  const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString() || '';
  if (!isValidSignature(JSON.stringify(req.body), signature, secret)) {
    return res.status(401).json({message: 'Invalid signature'});
  }

  // if (!isValidRequest(req, secret)) {
  //   return res.status(401).json({message: 'Invalid signature'});
  // }

  console.log('req.body: ', req.body);
  try {
    const pathToRevalidate = req.body.slug;
    await res.revalidate(`/work/${pathToRevalidate}`);
    console.log('Revalidated!!');
    return res.json({revalidated: true});
  } catch (err) {
    console.log('Error revalidating: ', err);
    return res.status(500).send({message: 'Error revalidating'});
  }
}
