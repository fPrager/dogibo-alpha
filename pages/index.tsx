import { useState } from 'react';
import { Grid } from '@geist-ui/react';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import AppStage from '../utils/AppStage';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  const [stage, setStage] = useState(AppStage.MAIN);
  return (
    <Grid.Container gap={2} style={{ minHeight: '90vh' }}>
      <Grid xs={24} md={12}>
        <Box stage={stage} setStage={setStage} />
      </Grid>
      <Grid xs={24} md={12}>
        <Text stage={stage} setStage={setStage} />
      </Grid>
    </Grid.Container>
  );
};

export default App;
