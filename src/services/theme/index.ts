import { h } from 'preact';
import { setup, glob, styled } from 'goober';
import { prefix } from 'goober-autoprefixer';

import { THEME_KEYS, TTheme } from 'services/store/theme';
import { useStore } from 'services/store';

// fixes `goober` bug where TS thinks `theme` isn't defined as a prop
export const s = <P extends Record<string, unknown>>(
  tag: keyof JSX.IntrinsicElements
) => styled<{ theme?: TTheme } & P>(tag);

setup(h, prefix, () => useStore(...THEME_KEYS));

glob`
  @font-face {
    font-family: 'Space Grotesk Variable';
    font-weight: 100 1000;
    font-display: fallback;
    src: url('/fonts/SpaceGrotesk-VariableFont_wght.ttf') format('truetype supports variations'),
        url('/fonts/SpaceGrotesk-VariableFont_wght.ttf') format('truetype-variations'); 
  }
`;

glob`
  @font-face {
    font-family: 'Space Grotesk';
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
    src: url('/fonts/SpaceGrotesk-Regular.woff2') format('woff2'), 
         url('/fonts/SpaceGrotesk-Regular.ttf')  format('truetype'); 
  }
`;

glob`
  @font-face {
    font-family: 'Space Grotesk';
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
    src: url('/fonts/SpaceGrotesk-Medium.woff2') format('woff2'), 
         url('/fonts/SpaceGrotesk-Medium.ttf')  format('truetype'); 
         
  }
`;

glob`
  @font-face {
    font-family: 'Verona Serial';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: url('/fonts/verona-serial-medium-regular.ttf') format('truetype');
  }
`;

glob`
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
