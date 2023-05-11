import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';
import { UserSettings } from '../model/types/userSettings';

interface SetUserSettingsArg {
    userId: string;
    userSettings: UserSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setUserSettings: build.mutation<User, SetUserSettingsArg>({
            query: ({ userId, userSettings }) => ({
                method: 'PATCH',
                url: `/users/${userId}`,
                body: { userSettings },
            }),
        }),
        getUserDataById: build.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
            }),
        }),
    }),
});

// dispatch(api.endpoints.getPosts.initiate())

export const setUserSettingsMutation = userApi.endpoints.setUserSettings.initiate;
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
