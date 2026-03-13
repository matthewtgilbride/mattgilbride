import {
  configurePalette,
  Palette,
} from 'design-system/utils/color/palette';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

export const lightPalette = configurePalette({
  primary: '#1a1a2e',
  secondary: '#1a1a2e',
  accent: '#2563eb',
  error: '#dd2c00',
  warning: '#f2a51a',
  success: '#00bdaa',
  contrast: '#ffffff',
  text: '#1a1a2e',
  gray: '#6b7280',
});

export const darkPalette = configurePalette({
  primary: '#e5e7eb',
  secondary: '#e5e7eb',
  accent: '#38bdf8',
  error: '#dd2c00',
  warning: '#f2a51a',
  success: '#00bdaa',
  contrast: '#111827',
  text: '#e5e7eb',
  gray: '#9ca3af',
});

export type PaletteType = 'light' | 'dark';

const LOCAL_STORAGE_KEY = 'palette';

const paletteMap: { [key in PaletteType]: Palette } = {
  light: lightPalette,
  dark: darkPalette,
};

interface PaletteState {
  paletteType: PaletteType;
  setPalette: (p: PaletteType) => void;
}

const PaletteContext = createContext<PaletteState | undefined>(undefined);

const getSystemPreference = (): PaletteType => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const PaletteProvider: FC<PropsWithChildren> = ({ children }) => {
  const inBrowser = typeof window !== 'undefined';
  const [state, setState] = useState<PaletteType>('light');

  useEffect(() => {
    if (inBrowser) {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY) as PaletteType | null;
      // Use stored preference if it's a valid light/dark value, otherwise detect system preference
      if (stored === 'light' || stored === 'dark') {
        setState(stored);
      } else {
        const systemPref = getSystemPreference();
        localStorage.setItem(LOCAL_STORAGE_KEY, systemPref);
        setState(systemPref);
      }
    }
  }, [inBrowser]);

  // Listen for system theme changes
  useEffect(() => {
    if (!inBrowser) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const newPref = e.matches ? 'dark' : 'light';
      localStorage.setItem(LOCAL_STORAGE_KEY, newPref);
      setState(newPref);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
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
