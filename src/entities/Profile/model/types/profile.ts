import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

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
}
