import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export interface Profile {
    id?: string;
    username?: string;
    first?: string;
    lastname?: string;
    age?: number | string;
    currency?: Currency;
    country?: Country;
    city?: string;
    avatar?: string;
}
