import { useRef, useState } from 'react';
import { Input, Button, Spacer } from '@geist-ui/react';
import NumericInput from 'react-numeric-input';

export interface ContributionFormProps {

}

export const ContributionForm: React.FC<ContributionFormProps> = ({

}) => {
  const ref = useRef<NumericInput>(null);
  const [amount, setAmount] = useState('0 €');
  const [num, setNum] = useState(amount);

  const numInput = (value: string) => {
    setNum(value);
    setAmount(value);
  };

  const validate = () => {
    if (ref.current) {
      setAmount(`${ref.current.refsInput.getValueAsNumber()} €`);
    }
  };

  return (
    <>
      <p>
        Damit deine Spende mit in der Box landet,
        kannst du hier den Betrag und einen Gruß angeben.
      </p>
      <div style={{ display: 'none' }}>
        <NumericInput value={num} ref={ref} min={0} />
      </div>
      <Spacer />
      <Input
        value={amount}
        onChange={(e) => numInput(e.target.value)}
        onBlur={validate}
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
