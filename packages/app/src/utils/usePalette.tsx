import {
  configurePalette,
  Palette,
} from '@mattgilbride/design-system/lib/utils/color/palette';
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

const sixersPalette = configurePalette({
  primary: '#BB9754',
  secondary: '#BB9754',
  accent: '#ED174C',
  error: '#dd2c00',
  warning: '#f2a51a',
  success: '#00bdaa',
  contrast: '#002B5C',
  text: '#C4CED4',
  gray: '#707677',
});

const barcaPalette = configurePalette({
  primary: '#A70042',
  secondary: '#A70042',
  accent: '#EDBC00',
  error: '#dd2c00',
  warning: '#f2a51a',
  success: '#00bdaa',
  contrast: '#FFFFFF',
  text: '#004C99',
  gray: '#707677',
});

export type PaletteType = 'sixers' | 'barca';

const defaultPalette: PaletteType = 'barca';
const LOCAL_STORAGE_KEY = 'palette';

const paletteMap: { [key in PaletteType]: Palette } = {
  sixers: sixersPalette,
  barca: barcaPalette,
};

interface PaletteState {
  paletteType: PaletteType;
  setPalette: (p: PaletteType) => void;
}

const PaletteContext = createContext<PaletteState | undefined>(undefined);

export const PaletteProvider: FC = ({ children }) => {
  const inBrowser = typeof window !== 'undefined';
  const [state, setState] = useState<PaletteType>(defaultPalette);
  useEffect(() => {
    if (inBrowser) {
      setState(
        (localStorage.getItem(LOCAL_STORAGE_KEY) as PaletteType) ??
          defaultPalette,
      );
    }
  }, [inBrowser]);
  const setPalette = (paletteType: PaletteType): void => {
    localStorage.setItem(LOCAL_STORAGE_KEY, paletteType);
    setState(paletteType);
  };
  return (
    <PaletteContext.Provider value={{ paletteType: state, setPalette }}>
      {children}
    </PaletteContext.Provider>
  );
};

export interface UsePalette {
  paletteType: PaletteState['paletteType'];
  palette: Palette;
  setPalette: PaletteState['setPalette'];
}

export const usePalette = (): UsePalette => {
  const context = useContext(PaletteContext);
  if (!context)
    throw new Error('usePalette must be used within a PaletteProvider');
  return {
    paletteType: context.paletteType,
    palette: paletteMap[context.paletteType],
    setPalette: context.setPalette,
  };
};
