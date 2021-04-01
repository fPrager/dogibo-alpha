import type { NextApiRequest, NextApiResponse } from 'next';
import getAllDonations from '../../db/get-all-donations';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const donations = await getAllDonations();
  res.status(200).json(donations);
};
