import { buildSelector } from '@/shared/lib/store';
import { UserSettings } from '../types/userSettings';

const defaultUserSettings: UserSettings = {};

export const [useUserSettings, getUserSettings] = buildSelector(
    (state) => state.user?.authData?.userSettings ?? defaultUserSettings,
);

export const [useUserSettingsByKey, getUserSettingsByKey] = buildSelector(
    (state, key: keyof UserSettings) => state?.user?.authData?.userSettings?.[key],
);
