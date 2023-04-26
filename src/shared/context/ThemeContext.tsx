import { createContext } from 'react';
import { Theme } from '@/shared/const/theme';

export interface ThemeContentPros {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContentPros>({});
