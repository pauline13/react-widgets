import Loader from '@/shared/ui/Loader/Loader';
import { PokemonCardProps } from '../model/types';

const PokeCard = ({ pokemon, loading, infoPoke, className }: PokemonCardProps) => {
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                pokemon.map((pokemon) => (
                    <div
                        key={pokemon.name}
                        onClick={() => {
                            infoPoke(pokemon);
                        }}
                        className={`${className} flex items-center justify-between box-border w-[250px] rounded-xl p-4 bg-primary text-text hover:cursor-pointer`}
                    >
                        <p>{pokemon.id}</p>
                        <img src={pokemon.sprites.front_default} alt="poke img" />
                        <p>{pokemon.name}</p>
                    </div>
                ))
            )}
        </>
    );
};

export default PokeCard;
