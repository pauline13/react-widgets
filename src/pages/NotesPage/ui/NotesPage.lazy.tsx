import { lazy } from 'react';

export const NotesPageLazy = lazy(
    () =>
        new Promise(resolve => {
            // @ts-ignore
            setTimeout(() => resolve(import('./NotesPage')), 800);
        }),
);
