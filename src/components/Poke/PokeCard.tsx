import React from 'react';
import PokeInfo from './PokeInfo';

// @ts-ignore
const PokeCard = ({ pokemon, loading, infoPoke }) => {
    return (
        <>
            {loading ? (
                <p>loading the pokemon...</p>
            ) : (
                // @ts-ignore
                pokemon.map(poke => (
                    <div
                        key={poke.id}
                        // @ts-ignore
                        onClick={() => {
                            console.log('POKE:', poke);
                            infoPoke(poke);
                        }}
                        className="flex items-center mb-4 justify-between box-border w-[250px] shadow-md rounded-xl p-4 bg-blue-200"
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
