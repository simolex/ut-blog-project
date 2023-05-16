import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import ThemeIcon from '@/shared/assets/icons/theme-icon.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveUserSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
    className?: string;
    size?: number;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className, size = 30 } = props;
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const onToggleHandler = useCallback(
        () =>
            toggleTheme((newTheme) => {
                dispatch(saveUserSettings({ theme: newTheme }));
            }),
        [toggleTheme, dispatch],
    );

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onToggleHandler}
            className={classNames('', {}, [className])}
        >
            <Icon Svg={ThemeIcon} width={size} height={size} inverted />
        </Button>
    );
});
