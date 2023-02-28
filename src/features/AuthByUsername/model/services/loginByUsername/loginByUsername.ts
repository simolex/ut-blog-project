import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from 'entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
    try {
        const response = await axios.post<User>('http://localhost:7000/login', {
            username,
            password,
        });

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue('username-or-password-failed');
    }
});
