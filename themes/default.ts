/**
 * Just customize what you need, deep merge themes by default.
 *
 * If you are using TypeScript, please use the following type definition.
 * If you are using JavaScript, refer to https://github.com/geist-org/react/blob/master/components/themes/presets/index.ts
 */

import {
//   GeistUIThemes,
//   GeistUIThemesPalette,
//   GeistUIThemesExpressiveness,
  Themes,
  GeistUIThemes,
  GeistUIThemesFont,
} from '@geist-ui/react';

const font: GeistUIThemesFont = {
  mono: 'SmoothySans',
  sans: 'SmoothySans',
};

const DefaultTheme = Themes.createFromLight({
  type: 'default',
  //  font,
});

export default DefaultTheme;
