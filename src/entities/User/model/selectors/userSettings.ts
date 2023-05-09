import { buildSelector } from '@/shared/lib/store';
import { UserSettings } from '../types/userSettings';

const initialUserSettings: UserSettings = {
    // theme: Theme.LIGHT,
    // isFirstVizit: true,
    // settingsPageHasBeenOpen: false,
};

export const [useUserSettings, getUserSettings] = buildSelector(
    (state) => state.user?.authData?.userSettings ?? initialUserSettings,
);

export const [useUserSettingsByKey, getUserSettingsByKey] = buildSelector(
    (state, key: keyof UserSettings) =>
        state.user?.authData?.userSettings?.[key] ?? initialUserSettings[key],
);
