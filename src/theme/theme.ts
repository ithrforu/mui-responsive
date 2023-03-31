import { PaletteOptions, createTheme } from '@mui/material';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#1760a5',
        light: 'skyblue',
      },
      secondary: {
        main: '#15c630',
      },
      otherColor: {
        main: '#999',
      },
    } as PaletteOptions,
  });
