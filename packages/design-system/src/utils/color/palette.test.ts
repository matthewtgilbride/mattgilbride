import { configurePalette } from './palette';

describe('configurePalette', () => {
  it('returns an object of functions', () => {
    const palette = configurePalette({
      primary: '#00a1ab',
      secondary: '#2fc4b2',
      accent: '#ff5722',
      error: '#dd2c00',
      warning: '#f2a51a',
      success: '#00bdaa',
      contrast: 'black',
      text: 'white',
      gray: '#707677',
    });

    expect(palette.gray(-75)).toEqual('#1c1d1d');
  });
});
