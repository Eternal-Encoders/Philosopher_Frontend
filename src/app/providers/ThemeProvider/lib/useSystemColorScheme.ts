import { useEffect, useState } from 'react';
import { ETheme } from './ThemeContext';

export function useSystemColorScheme() {
  const [scheme, setScheme] = useState<ETheme>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? ETheme.DARK
      : ETheme.LIGHT;
  });

  useEffect(() => {
    const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');

    const changeHandler = (e: MediaQueryListEvent) => {
      setScheme(e.matches ? ETheme.DARK : ETheme.LIGHT);
    };

    darkMedia.addEventListener('change', changeHandler);

    return () => {
      darkMedia.removeEventListener('change', changeHandler);
    };
  }, []);

  return scheme;
}