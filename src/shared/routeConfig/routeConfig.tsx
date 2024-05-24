import { RouteProps } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import { NotesPage } from '../../pages/NotesPage';
import { PokePage } from '../../pages/PokePage';
import PageError from '../../widgets/PageError/ui/PageError';

export enum AppRoutes {
    HOME = 'home',
    NOTES = 'notes',
    POKEMONS = 'pokemons',
    NO_FOUND = 'no_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.NOTES]: '/notes',
    [AppRoutes.POKEMONS]: '/pokemons',
    [AppRoutes.NO_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRoutes.NOTES]: {
        path: RoutePath.notes,
        element: <NotesPage />,
    },
    [AppRoutes.POKEMONS]: {
        path: RoutePath.pokemons,
        element: <PokePage />,
    },
    [AppRoutes.NO_FOUND]: {
        path: RoutePath.no_found,
        element: <PageError />,
    },
};
