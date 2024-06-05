import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from './types';
import { getOnePokemon, loadPokemons } from './PokemonAction';

interface PokemonState {
    pokemons: Pokemon[];
    isLoading: boolean;
    nextUrl?: string;
    prevUrl?: string;
    pokemonInfo: Pokemon | null;
    url: string;
    error: string;
}

const initialState: PokemonState = {
    pokemons: [],
    isLoading: true,
    nextUrl: undefined,
    prevUrl: undefined,
    pokemonInfo: null,
    url: 'https://pokeapi.co/api/v2/pokemon',
    error: '',
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getUrl(state, action: PayloadAction<string>) {
            state.url = action.payload;
        },
        getNextUrl: (state, action: PayloadAction<string>) => {
            state.nextUrl = action.payload;
        },
        getPrevUrl: (state, action: PayloadAction<string>) => {
            state.prevUrl = action.payload;
        },
        getPokemonInfo: (state, action: PayloadAction<Pokemon | null>) => {
            state.pokemonInfo = action.payload;
        },
        getError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        goToNextPage(state) {
            if (state.nextUrl) {
                state.url = state.nextUrl;
            }
        },
        goToPrevPage(state) {
            if (state.prevUrl) {
                state.url = state.prevUrl;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadPokemons.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });

        builder.addCase(loadPokemons.fulfilled, (state, action) => {
            state.isLoading = false;
            state.pokemons = action.payload.results;
            state.nextUrl = action.payload.next;
            state.prevUrl = action.payload.previous;
        });

        builder.addCase(loadPokemons.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Failed to load Pokemons';
        });

        builder.addCase(getOnePokemon.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });

        builder.addCase(getOnePokemon.fulfilled, (state, action) => {
            state.isLoading = false;
            state.pokemonInfo = action.payload;
        });

        builder.addCase(getOnePokemon.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Failed to load the pokemon';
        });
    },
});

export default pokemonSlice.reducer;

export const { actions: pokemonActions } = pokemonSlice;
export const { reducer: pokemonReducer } = pokemonSlice;
