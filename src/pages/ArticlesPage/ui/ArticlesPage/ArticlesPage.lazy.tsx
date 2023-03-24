import { lazy } from 'react';

// export const MainPageLazy = lazy(() => import("./MainPage"));
export const ArticlesPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./ArticlesPage')), 400);
        }),
);
