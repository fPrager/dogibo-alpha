import { useState, useEffect } from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import AppStage from '../utils/AppStage';
import getClientId from '../utils/get-client-id';
import { Donation } from '.prisma/client';
import Banknote from '../components/Banknote';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  const client = getClientId();

  const [stage, setStage] = useState(AppStage.MAIN);
  const [donation, setDonation] = useState<Donation>({
    id: 0,
    client,
    amount: 0,
    donor: '',
    msg: '',
  });
  const [newDonation, setNewDonation] = useState(true);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const requestDonation = async () => {
      const resDonation = await fetch(`/api/get-donation?client=${client}`);
      const dataDonation = await resDonation.json();
      if (dataDonation.newDonation) {
        setNewDonation(true);
      } else {
        setNewDonation(false);
        setDonation(dataDonation);
      }

      isLoading(false);
    };
    requestDonation();
  }, []);

  const updateDonation = (updatedDonation: Donation, updatedNewDonation: boolean) => {
    setDonation(updatedDonation);
    setNewDonation(updatedNewDonation);
  };

  return (
    <>
      <div className="boxContainer">
        <Banknote stage={stage} donation={donation} />
        <Box stage={stage} setStage={setStage} />
      </div>
      <div className="textContainer">
        <Text
          stage={stage}
          setStage={setStage}
          loading={loading}
          donation={donation}
          newDonation={newDonation}
          updateDonation={updateDonation}
        />
      </div>
    </>
  );
};

export default App;
