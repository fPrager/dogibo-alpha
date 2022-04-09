import React from 'react';
import { Donation } from '.prisma/client';
import AppStage from '../utils/AppStage';

import styles from './Banknote.module.scss';

type BanknoteProps = {
  stage: AppStage,
  donation: Donation,
  listed?: boolean,
};

const Banknote = ({
  stage,
  donation,
  listed,
}: BanknoteProps) => (
  <div className={`${styles.note} ${styles.newDonation} ${listed && styles.listed} ${stage !== AppStage.CONTRIBUTE ? styles.hidden : ''}`}>
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

Banknote.defaultProps = {
  listed: false,
};

export default Banknote;
