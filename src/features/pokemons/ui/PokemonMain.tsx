import { useEffect } from 'react';
import Button, { ButtonTheme } from '../../../shared/ui/Button/Button';
import PokemonCard from './PokemonCard';
import PokemonInfo from './PokemonInfo';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { loadPokemons } from '../model/PokemonAction';
import { pokemonActions } from '../model/PokemonSlice';
import { Pokemon } from '../model/types';

const PokemonMain = () => {
    const { t } = useTranslation('pokemon');

    const dispatch = useAppDispatch();
    const { getPokemonInfo, goToNextPage, goToPrevPage } = pokemonActions;
    const { pokemons, isLoading, nextUrl, prevUrl, pokemonInfo, url, error } =
        useAppSelector((state) => state.pokemonReducer);

    useEffect(() => {
        dispatch(loadPokemons(url));
    }, [dispatch, url]);

    const getNextPage = () => {
        dispatch(goToNextPage());
    };

    const getPrevPage = () => {
        dispatch(goToPrevPage());
    };

    const getCurrentPokemon = (pokemon: Pokemon) => {
        dispatch(getPokemonInfo(pokemon));
    };

    return (
        <div className="flex mt-4 gap-12">
            <div>
                <div className="grid lg:grid-cols-2 gap-4">
                    <PokemonCard
                        className="text-lg"
                        pokemon={pokemons}
                        loading={isLoading}
                        infoPoke={getCurrentPokemon}
                    />
                </div>
                <div className="flex mt-5 gap-2">
                    {prevUrl && (
                        <Button
                            onClick={getPrevPage}
                            theme={ButtonTheme.OUTLINE}
                            className="p-2"
                        >
                            {t('Предыдущая страница')}
                        </Button>
                    )}
                    {nextUrl && (
                        <Button
                            onClick={getNextPage}
                            theme={ButtonTheme.OUTLINE}
                            className="p-2"
                        >
                            {t('Следующая страница')}
                        </Button>
                    )}
                </div>
            </div>
            <div>
                {error && <p className="text-error">{error}</p>}
                <PokemonInfo data={pokemonInfo} />
            </div>
        </div>
    );
};

export default PokemonMain;
