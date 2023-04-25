import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Theme } from '@/shared/const/Theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
    size?: number;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className, size = 30 } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? (
                <DarkIcon width={size} height={size} />
            ) : (
                <LightIcon width={size} height={size} />
            )}
        </Button>
    );
});
