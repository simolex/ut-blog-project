import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { User, UserSchema } from '../types/user';
import { UserSettings } from '../types/userSettings';
import { Theme } from '@/shared/const/theme';
import { saveUserSettings } from '../../services/saveUserSettings';

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
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user) {
                const userJSON = JSON.parse(user) as User;

                const userSetting = { ...defaultUserSettings, ...userJSON.userSettings };
                userJSON.userSettings = userSetting;

                state.authData = userJSON;
                setFeatureFlags(userJSON?.features);
            }
            state._mounted = true;
        },
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
        // .addCase(fetchArticleById.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
