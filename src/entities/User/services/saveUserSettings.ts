import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { UserSettings } from '../model/types/userSettings';
import { getUserAuthData } from '../model/selectors/getUserAuthData/getUserAuthData';
import { getUserSettings } from '../model/selectors/userSettings';
import { setUserSettingsMutation } from '../api/useApi';

export const saveUserSettings = createAsyncThunk<UserSettings, UserSettings, ThunkConfig<string>>(
    'user/saveUserSettings',
    async (newUserSettings, thunkApi) => {
        const { rejectWithValue, getState, dispatch } = thunkApi;
        const userData = getUserAuthData(getState());
        const currentSettings = getUserSettings(getState());

        if (!userData) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(
                setUserSettingsMutation({
                    userId: userData.id,
                    userSettings: {
                        ...currentSettings,
                        ...newUserSettings,
                    },
                }),
            ).unwrap();

            if (!response.userSettings) {
                return rejectWithValue('');
            }

            return response.userSettings;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
