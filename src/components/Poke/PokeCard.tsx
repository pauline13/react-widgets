import Loader from '../Loader';
import { PokeCardProps } from '../../types/pokeTypes';

const PokeCard = ({ pokemon, loading, infoPoke, className }: PokeCardProps) => {
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                pokemon.map((poke) => (
                    <div
                        key={poke.name}
                        onClick={() => {
                            infoPoke(poke);
                        }}
                        className={`${className} flex items-center justify-between box-border w-[250px] shadow-md rounded-xl p-4 bg-blue-200`}
                    >
                        <p>{poke.id}</p>
                        <img src={poke.sprites.front_default} alt="poke img" />
                        <p>{poke.name}</p>
                    </div>
                ))
            )}
        </>
    );
};

export default PokeCard;
