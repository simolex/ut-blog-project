import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 21,
    lastname: 'Buggi',
    first: 'Wuggi',
    city: 'City',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: undefined, lastname: undefined });

        expect(result).toEqual([ValidateProfileError.INCORECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: '12' });

        expect(result).toEqual([ValidateProfileError.INCORECT_AGE]);
    });
});
