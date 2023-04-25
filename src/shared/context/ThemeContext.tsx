import { createContext } from 'react';
import { Theme } from '@/shared/const/Theme';

export interface ThemeContentPros {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContentPros>({});
