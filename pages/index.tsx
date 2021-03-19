import { Grid, Card } from '@geist-ui/react';
import Box from '../components/Box';
import Text from '../components/Text';

const MockItem = ({ children }) => {
  return <Card style={{ width: '100%', height: '100%'}} >{children}</Card>
}

const App = () => {
  return (
    <Grid.Container gap={2} justify={'center'} style={{ minHeight: '90vh' }}>
      <Grid xs={24} md={12}>
        <MockItem><Box /></MockItem>
      </Grid>
      <Grid xs={24} md={12}>
      <MockItem><Text /></MockItem>
      </Grid>
    </Grid.Container>
  )
}

export default App;