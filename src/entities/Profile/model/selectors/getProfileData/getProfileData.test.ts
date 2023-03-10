import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

const data = {
    username: 'admin',
    age: 21,
    lastname: 'Buggi',
    first: 'Wuggi',
};

describe('getProfileData.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
