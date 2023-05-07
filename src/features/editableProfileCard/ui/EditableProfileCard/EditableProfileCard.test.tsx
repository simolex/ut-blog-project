import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests';
import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 79,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Ergo',
    username: 'super',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            form: profile,
            data: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    test('switch to editable mode', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
        expect(screen.getByTestId('EditableProfilePageHeader.CancelButton')).toBeInTheDocument();
    });

    test('after click cancel, form is rollbacked', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user');

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');

        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
    });

    test('must be throw errors', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
    });

    test('is valid form mast be send to server with PUT', async () => {
        const mockPut = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));

        expect(mockPut).toHaveBeenCalled();
    });
});
