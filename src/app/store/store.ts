import { combineReducers, configureStore } from '@reduxjs/toolkit';
import noteReducer from '../../features/notes/model/NoteSlice';
import pokemonReducer from '../../features/pokemons/model/PokemonSlice';

const rootReducer = combineReducers({
    noteReducer,
    pokemonReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
