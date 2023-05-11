import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { User, UserSchema } from '../types/user';
import { UserSettings } from '../types/userSettings';
import { Theme } from '@/shared/const/theme';
import { saveUserSettings } from '../services/saveUserSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    _mounted: false,
};

const defaultUserSettings: UserSettings = {
    theme: Theme.LIGHT,
    isFirstVizit: true,
    settingsPageHasBeenOpen: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);

            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
        },
        // initAuthData: (state) => {
        //     const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        //     if (user) {
        //         const userJSON = JSON.parse(user) as User;

        //         const userSetting = { ...defaultUserSettings, ...userJSON.userSettings };
        //         userJSON.userSettings = userSetting;

        //         state.authData = userJSON;
        //         setFeatureFlags(userJSON?.features);
        //     }
        //     state._mounted = true;
        // },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveUserSettings.fulfilled,
            (state, { payload }: PayloadAction<UserSettings>) => {
                if (state.authData) {
                    state.authData.userSettings = payload;
                }
            },
        );
        // .addCase(saveUserSettings.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });
        builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
            //
            //
            //
            //
            const userSetting = { ...defaultUserSettings, ...(payload?.userSettings ?? {}) };

            state.authData = payload;
            // state.authData.userSettings = userSetting;
            setFeatureFlags(payload?.features);
            state._mounted = true;
        });
        builder.addCase(initAuthData.rejected, (state) => {
            state._mounted = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
