import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

// export const MainPageLazy = lazy(() => import("./MainPage"));
export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./AddCommentForm')), 1500);
        }),
);
