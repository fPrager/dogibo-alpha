import { Donation } from '.prisma/client';
import DB from './db';

const getAllDonations = async (): Promise<Donation[]> => {
  const donations = await DB.donation.findMany({});

  return donations;
};

export default getAllDonations;
