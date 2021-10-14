import { Donation } from '.prisma/client';
import DB from './db';

interface GetDonationProps {
  client: string,
}

const getDonation = async ({ client } : GetDonationProps): Promise<Donation | null> => {
  const donation = await DB.donation.findFirst({
    where: {
      client,
    },
  });

  return donation;
};

export default getDonation;
