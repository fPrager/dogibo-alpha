import { useState } from 'react';
import {
  Input, Button, Spacer, Grid,
} from '@geist-ui/react';
import numeral from 'numeral';
import 'numeral/locales/de';

import { Donation } from '.prisma/client';
import styles from './ContributionForm.module.scss';

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
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    setIsSaving(false);
  };

  return (
    <div className={styles.form}>
      { newDonation ? (
        <p>
          Damit deine Spende mit in der Box landet,
          kannst du hier den Betrag und einen Gruß angeben.
        </p>
      )
        : (
          <p>
            Du möchtest gern noch etwas anpassen? Dann kannst du das hier gern noch heimlich machen.
          </p>
        )}
      <Spacer />
      <Input
        value={amountValue}
        onChange={(e) => onAmountChange(e.target.value)}
        onBlur={onAmountBlur}
        label="Deine Spende"
        placeholder="16,16 €"
        className={styles.scaledInput}
        width="100%"
      />
      <Spacer />
      <Input
        value={donation.donor || undefined}
        onChange={(e) => onDonationChange({ ...donation, donor: e.target.value }, newDonation)}
        label="Dein Name"
        placeholder="Best Buddy"
        className={styles.scaledInput}
        width="100%"
      />
      <Spacer />
      <Input
        value={donation.msg || undefined}
        onChange={(e) => onDonationChange({ ...donation, msg: e.target.value }, newDonation)}
        label="Dein Gruß"
        placeholder="Wer das liest ist ❤️"
        className={styles.scaledInput}
        width="100%"
      />
      <Spacer />
      <Grid.Container justify="center">
        <Grid>
          <Button type="secondary" loading={isSaving} onClick={saveDonation}>
            { newDonation ? 'Jetzt einwerfen!' : 'Jetzt anpassen!' }
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default ContributionForm;
