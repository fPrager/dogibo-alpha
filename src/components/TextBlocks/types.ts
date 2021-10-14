import { Donation } from '.prisma/client';

export interface TextBlockProps {
  setStage: Function,
  loading?: boolean,
  days2Event: number,
  donation: Donation,
  newDonation: boolean,
  updateDonation: Function,
}
