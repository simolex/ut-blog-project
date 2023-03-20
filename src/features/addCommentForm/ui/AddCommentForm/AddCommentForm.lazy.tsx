import { lazy } from 'react';

// export const MainPageLazy = lazy(() => import("./MainPage"));
export const AddCommentFormLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./AddCommentForm')), 1500);
        }),
);
