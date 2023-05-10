import { ReactNode, useEffect, useMemo, useState } from 'react';

import { useUserSettingsByKey } from '@/entities/User';
import { ThemeContext } from '@/shared/context/ThemeContext';
import { Theme } from '@/shared/const/theme';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;
    // TODO
    const defaultTheme = useUserSettingsByKey('theme') as Theme;
    const [isThemeInited, setIsThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);
    // TODO maybe
    useEffect(() => {
        if (!isThemeInited) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    document.body.className = theme;

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
