export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authDate?: User;
    _mounted: boolean;
}
