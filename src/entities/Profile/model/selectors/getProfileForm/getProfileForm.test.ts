import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

const form = {
    username: 'admin',
    age: 21,
    lastname: 'Buggi',
    first: 'Wuggi',
};

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
