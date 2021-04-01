import type { NextApiRequest, NextApiResponse } from 'next';
import getDonation from '../../db/get-donation';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    client,
  } = req.query;
  const donation = await getDonation({ client: `${client}` });
  console.log(donation, client);
  if (!donation) {
    res.status(200).json({ newDonation: true });
    return;
  }
  res.status(200).json(donation);
};
