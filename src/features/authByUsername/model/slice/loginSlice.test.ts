import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('superuser'))).toEqual({
            username: 'superuser',
        });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '1' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({
            password: '123',
        });
    });

    test('test set isLoading', () => {
        const state: DeepPartial<LoginSchema> = { isLoading: false };
        expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual({
            isLoading: true,
        });
    });

    test('test set error', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(loginReducer(state as LoginSchema, loginByUsername.rejected)).toEqual({
            isLoading: false,
        });
    });
});
