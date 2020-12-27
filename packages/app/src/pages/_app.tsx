import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { PaletteProvider } from '../utils/usePalette';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <PaletteProvider>
      <Component {...pageProps} />
    </PaletteProvider>
  );
};

export default App;
