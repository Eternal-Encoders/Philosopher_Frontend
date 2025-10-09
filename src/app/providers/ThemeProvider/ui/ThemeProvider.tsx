import { useMemo, useState } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';
//import { useSystemColorScheme } from '../lib/useSystemColorScheme';

interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({children}: IThemeProvider) => {
  //Turn off on while
  // const systemScheme = useSystemColorScheme();
  // const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || systemScheme;
  const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.DARK;

  const [theme, setTheme] = useState<ETheme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext value={defaultProps}>
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;