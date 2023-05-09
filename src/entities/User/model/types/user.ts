import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserSettings } from './userSettings';

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
}

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    userSettings?: UserSettings;
}

export interface UserSchema {
    authData?: User;
    _mounted: boolean;
}
