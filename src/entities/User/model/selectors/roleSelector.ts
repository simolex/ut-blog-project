import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../types/user';

export const getUserRoles = (state: StateSchema) => state.user.authDate?.roles;

export const getIsAdmin = createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(UserRole.ADMIN)),
);

export const getIsManager = createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(UserRole.MANAGER)),
);

export const getIsUser = createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(UserRole.USER)),
);
