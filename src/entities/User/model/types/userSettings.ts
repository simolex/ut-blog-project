import { Theme } from '@/shared/const/theme';

export interface UserSettings {
    theme?: Theme;
    isFirstVizit?: boolean;
    settingsPageHasBeenOpen?: boolean;
}
