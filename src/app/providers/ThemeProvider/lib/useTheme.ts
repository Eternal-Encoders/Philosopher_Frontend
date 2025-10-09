import { use } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const {theme, setTheme} = use(ThemeContext);
  if (!setTheme) {
    throw new Error('setTheme is not defined in ThemeContext');
  }
  if (theme === undefined) {
    throw new Error('theme is not defined in ThemeContext');
  }
  document.body.className = theme;
  const toggleTheme = () => {
    const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { theme, toggleTheme };
};