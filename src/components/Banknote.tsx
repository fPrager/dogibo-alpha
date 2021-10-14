import React from 'react';
import { Donation } from '.prisma/client';
import AppStage from '../utils/AppStage';

import styles from './Banknote.module.scss';

interface BanknoteProps {
  stage: AppStage,
  donation: Donation,
}

export const Banknote: React.FC<BanknoteProps> = ({
  stage,
  donation,
}) => (
  <div className={`${styles.note} ${styles.newDonation} ${stage !== AppStage.CONTRIBUTE ? styles.hidden : ''}`}>
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

export default Banknote;
