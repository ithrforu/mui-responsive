import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { getTheme } from './theme';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
  toggleMode: Dispatch<SetStateAction<Theme>>;
}>({ toggleMode: () => {} });

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, toggleMode] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ toggleMode }}>
      <MUIThemeProvider theme={getTheme(mode)}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
