/**
 * https://prismic.io/docs/reactjs/getting-started/prismic-nextjs
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
const ExitPreview = async (_: unknown, res: any): Promise<void> => {
  res.clearPreviewData();

  res.writeHead(307, { Location: '/' });
  res.end();
};

export default ExitPreview;
