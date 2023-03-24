import { lazy } from 'react';

// export const MainPageLazy = lazy(() => import("./MainPage"));
export const ArticleDetailsPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
        }),
);
