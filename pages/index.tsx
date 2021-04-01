import { useState, useEffect } from 'react';
import { Grid } from '@geist-ui/react';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import AppStage from '../utils/AppStage';
import getClientId from '../utils/get-client-id';
import { Donation } from '.prisma/client';

interface AppProps {

}

// <Box stage={stage} setStage={setStage} />

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

  console.log('render all with', donation);

  return (
    <Grid.Container gap={2} style={{ minHeight: '90vh' }}>
      <Grid xs={24} md={12}>
        <div>BOX</div>
      </Grid>
      <Grid xs={24} md={12}>
        <Text
          stage={stage}
          setStage={setStage}
          loading={loading}
          donation={donation}
          newDonation={newDonation}
          updateDonation={updateDonation}
        />
      </Grid>
    </Grid.Container>
  );
};

export default App;
