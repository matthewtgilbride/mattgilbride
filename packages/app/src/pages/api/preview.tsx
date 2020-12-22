import { NextApiHandler } from 'next';
import { linkResolver, PrismicClient } from '../../prismic';

/**
 * https://prismic.io/docs/reactjs/getting-started/prismic-nextjs
 */
// eslint-disable-next-line consistent-return
const Preview: NextApiHandler = async (req, res) => {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await PrismicClient(req)
    .getPreviewResolver(ref as string, documentId as string)
    .resolve(linkResolver, '/');

  if (!redirectUrl) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({ ref });
  res.writeHead(302, { Location: `${redirectUrl}` });
  res.end();
};

export default Preview;
