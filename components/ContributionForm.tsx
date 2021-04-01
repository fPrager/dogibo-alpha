import { useRef, useState } from 'react';
import { Input, Button, Spacer } from '@geist-ui/react';
import numeral from 'numeral';

export interface ContributionFormProps {

}

numeral.register('locale', 'de', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal(number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: '€',
  },
});
numeral.locale('de');

export const ContributionForm: React.FC<ContributionFormProps> = ({

}) => {
  const [amountValue, setAmountValue] = useState('0 €');
  const [amount, setAmount] = useState(0);

  const onAmountChange = (value: string) => {
    setAmount(numeral(value).value() || 0);
    setAmountValue(value);
  };

  const onAmountBlur = () => {
    setAmountValue(`${amount} €`);
  };

  return (
    <>
      <p>
        Damit deine Spende mit in der Box landet,
        kannst du hier den Betrag und einen Gruß angeben.
      </p>
      <Spacer />
      <Input
        value={amountValue}
        onChange={(e) => onAmountChange(e.target.value)}
        onBlur={onAmountBlur}
      >
        Dein Spendenbetrag
      </Input>
      <Spacer />
      <Input>Dein Name</Input>
      <Spacer />
      <Input>Dein Gruß</Input>
      <Spacer />
      <Button>Jetzt reinwerfen!</Button>
    </>
  );
};
