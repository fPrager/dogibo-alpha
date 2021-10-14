import { useState } from 'react';
import {
  Input, Button, Spacer, Grid,
} from '@geist-ui/react';
import numeral from 'numeral';
import 'numeral/locales/de';

import styles from './ContributionForm.module.scss';
import { Donation } from '.prisma/client';

export interface ContributionFormProps {
  donation: Donation,
  newDonation: boolean,
  updateDonation: Function,
}

numeral.locale('de');

const ContributionForm: React.FC<ContributionFormProps> = ({
  donation,
  newDonation,
  updateDonation,
}) => {
  const [amountValue, setAmountValue] = useState(!newDonation ? `${donation.amount} €` : '');
  const [isSaving, setIsSaving] = useState(false);
  const onDonationChange = (changedDonation: Donation, changedNewDonation: boolean) => {
    updateDonation(changedDonation, changedNewDonation);
  };

  const onAmountChange = (value: string) => {
    onDonationChange(
      {
        ...donation,
        amount: numeral(value).value() || 0,
      },
      newDonation,
    );
    setAmountValue(value);
  };

  const onAmountBlur = () => {
    setAmountValue(`${donation.amount} €`);
  };

  const saveDonation = async () => {
    setIsSaving(true);
    await fetch('/api/set-donation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donation),
    });
    updateDonation(
      donation,
      false,
    );
    await new Promise((resolve) => (setTimeout(resolve, 1000)));
    setIsSaving(false);
  };

  return (
    <div className={styles.form}>
      { newDonation ? (
        <p>
          Tell how much you donated! Put a note in the box and leave a message.
        </p>
      )
        : (
          <p>
            You like to change something? It is still possible to change something in secret.
          </p>
        )}
      <Spacer />
      <Input
        value={amountValue}
        onChange={(e) => onAmountChange(e.target.value)}
        onBlur={onAmountBlur}
        label="Your Donation"
        placeholder="16,16 €"
        className={styles.scaledInput}
        width="100%"
      />
      <Spacer />
      <Input
        value={donation.donor || undefined}
        onChange={(e) => onDonationChange({ ...donation, donor: e.target.value }, newDonation)}
        label="Your Name"
        placeholder="Best Buddy"
        className={styles.scaledInput}
        width="100%"
      />
      <Spacer />
      <Input
        value={donation.msg || undefined}
        onChange={(e) => onDonationChange({ ...donation, msg: e.target.value }, newDonation)}
        label="Your Message"
        placeholder="To whom who has a ❤️"
        className={styles.scaledInput}
        width="100%"
      />
      <Spacer />
      <Grid.Container justify="center">
        <Grid>
          <Button type="secondary" loading={isSaving} onClick={saveDonation}>
            { newDonation ? 'Throw in now!' : 'Change it!' }
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default ContributionForm;
