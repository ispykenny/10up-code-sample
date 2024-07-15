'use client';
import { usePathname } from 'next/navigation';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type KeyTypes = 'isHeroLoaded' | 'isMenuOpen' | 'hasHeroOnPage';
type ValueTypes = boolean;

interface ThemeSettings {
  isHeroLoaded: boolean;
  isMenuOpen: boolean;
  hasHeroOnPage: boolean;
}

const defaultValues: ThemeSettings = {
  isHeroLoaded: false,
  hasHeroOnPage: false,
  isMenuOpen: false,
};

interface ThemeContextProps extends ThemeSettings {
  updateTheme: (key: KeyTypes, value: ValueTypes) => void;
}

const ThemeSetting = createContext<ThemeContextProps>({
  ...defaultValues,
  updateTheme: () => {},
});

export const useThemeSettings = () => useContext(ThemeSetting);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<ThemeSettings>(defaultValues);
  const navigation = usePathname();

  useEffect(() => {
    setSettings((prevSettings) => ({ ...prevSettings, isMenuOpen: false }));
  }, [navigation]);

  const updateTheme = (key: KeyTypes, value: ValueTypes) => {
    setSettings((prevSettings) => ({ ...prevSettings, [key]: value }));
  };

  return (
    <ThemeSetting.Provider
      value={{
        updateTheme,
        ...settings,
      }}
    >
      {children}
    </ThemeSetting.Provider>
  );
};
