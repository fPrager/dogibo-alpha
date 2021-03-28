import { Grid } from '@geist-ui/react';
import { Box } from '../components/Box';
import { Text } from '../components/Text';

export interface AppProps {

}

export const App = () => (
  <Grid.Container gap={2} style={{ minHeight: '90vh' }}>
    <Grid xs={24} md={12}>
      <Box />
    </Grid>
    <Grid xs={24} md={12}>
      <Text />
    </Grid>
  </Grid.Container>
);
