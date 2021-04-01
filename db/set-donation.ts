import DB from './db';
import { Donation } from '.prisma/client';

interface SetDonationProps {
  client: string,
  amount: number,
  donor: string,
  msg: string,
}

const setDonation = async ({
  client, amount, donor, msg,
} : SetDonationProps): Promise<Donation> => {
  const donation = await DB.donation.upsert({
    where: {
      client,
    },
    update: {
      amount,
      donor,
      msg,
    },
    create: {
      client,
      amount,
      donor,
      msg,
    },
  });

  return donation;
};

export default setDonation;
