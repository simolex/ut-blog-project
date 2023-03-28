import { lazy } from 'react';

export const ArticleEditPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./ArticleEditPage')), 400);
        }),
);
