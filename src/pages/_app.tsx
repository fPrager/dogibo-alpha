import type { AppProps /* , AppContext */ } from 'next/app';

import { GeistProvider, CssBaseline, Page } from '@geist-ui/react';

import DefaultTheme from '../themes/default';
import '../styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <GeistProvider themes={[DefaultTheme]} themeType="default">
    <CssBaseline />
    <Page>
      <Page.Content>
        <Component {...pageProps} />
      </Page.Content>
    </Page>
  </GeistProvider>
);

export default App;
