import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonApiResponse, Pokemon } from './types';

export const loadPokemons = createAsyncThunk(
    'pokemon/loadPokemons',
    async (url: string) => {
        const response = await axios.get<PokemonApiResponse>(url);
        const pokemonData = await Promise.all(
            response.data.results.map(async (pokemon) => {
                const pokemonDetails = await axios.get<Pokemon>(pokemon.url);
                return pokemonDetails.data;
            }),
        );
        return {
            results: pokemonData,
            next: response.data.next,
            previous: response.data.previous,
        };
    },
);

export const getOnePokemon = createAsyncThunk(
    'pokemon/getOnePokemon',
    async (url: string) => {
        const response = await axios.get<Pokemon>(url);
        return response.data;
    },
);

export const errorPokemon = createAction<string>('pokemon/errorPokemon');
