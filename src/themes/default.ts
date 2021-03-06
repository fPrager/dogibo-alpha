/**
 * Just customize what you need, deep merge themes by default.
 *
 * If you are using TypeScript, please use the following type definition.
 * If you are using JavaScript, refer to https://github.com/geist-org/react/blob/master/components/themes/presets/index.ts
 */

import {
  Themes,
} from '@geist-ui/react';

const palette: Object = {
  background: '#e5e5d3',
  foreground: '#111155',
};

const DefaultTheme = Themes.createFromLight({
  type: 'default',
  palette,
});

export default DefaultTheme;
