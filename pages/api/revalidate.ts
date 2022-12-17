import {isValidRequest} from '@sanity/webhook';
import type {NextApiRequest, NextApiResponse} from 'next';

const secret = process.env.SANITY_WEBHOOK_SECRET!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    console.error('Must be a POST request');
    return res.status(401).json({message: 'Must be a POST request'});
  }

  if (!isValidRequest(req, secret)) {
    res.status(401).json({message: 'Invalid signature'});
    return;
  }

  try {
    const {
      body: {type, slug},
    } = req;

    console.log('revalidate type ', type);
    console.log('revalidate slug ', slug);

    switch (type) {
      case 'post':
        await res.revalidate(`/work/${slug}`);
        return res.json({message: `Revalidated "${type}" with slug "${slug}"`});

      default:
        return res.json({message: 'No managed type'});
    }
  } catch (err) {
    return res.status(500).send({message: 'Error revalidating'});
  }
}
