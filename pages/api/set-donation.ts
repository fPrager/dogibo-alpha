import type { NextApiRequest, NextApiResponse } from 'next';
import setDonation from '../../db/set-donation';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    client,
    donor,
    amount,
    msg,
  } = req.body;
  const donation = await setDonation({
    client, donor, amount, msg,
  });
  res.status(200).json({ success: !!donation });
};
