// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default function fetchName(req: NextApiRequest, res: NextApiResponse<FetchNameData>) {
  res.status(200).json({ name: 'John Doe' });
}
