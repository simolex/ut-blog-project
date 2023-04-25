import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line simolex-plugin-lint/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
