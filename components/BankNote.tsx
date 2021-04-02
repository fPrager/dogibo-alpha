import React from 'react';
import { Donation } from '.prisma/client';
import AppStage from '../utils/AppStage';
import styles from './BankNote.module.scss';

export interface BankNoteProps {
  stage: AppStage,
  donation: Donation,
  newDonation: boolean,
}

export const BankNote: React.FC<BankNoteProps> = ({
  stage,
  donation,
  newDonation,
}) => (
  <div className={`${styles.note} ${true ? styles.newDonation : ''} ${stage !== AppStage.CONTRIBUTE ? styles.hidden : ''}`}>
    <div className={[styles.number, styles.top, styles.left].join(' ')}>
      {donation.amount}
    </div>
    <div className={[styles.number, styles.top, styles.right].join(' ')}>
      {donation.amount}
    </div>
    <div className={[styles.number, styles.bottom, styles.left].join(' ')}>
      {donation.amount}
    </div>
    <div className={[styles.number, styles.bottom, styles.right].join(' ')}>
      {donation.amount}
    </div>
    <div className={styles.text}>
      <div className={styles.msg}>{donation.msg}</div>
      <div className={styles.donor}>{donation.donor}</div>
    </div>
  </div>

);
