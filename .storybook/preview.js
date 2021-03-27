import '../styles/main.scss';

import { GeistProvider, CssBaseline } from '@geist-ui/react';
import DefaultTheme from '../themes/default';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <GeistProvider themes={[DefaultTheme]} themeType="default">
      <CssBaseline />
        <Story />
    </GeistProvider>
  ),
];