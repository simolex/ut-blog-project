import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
    INCORECT_USER_DATA = 'INCORECT_USER_DATA',
    INCORECT_AGE = 'INCORECT_AGE',
    INCORECT_CITY = 'INCORECT_CITY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    username?: string;
    first?: string;
    lastname?: string;
    age?: number | string;
    currency?: Currency;
    country?: Country;
    city?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
