import React from 'react';
import PokeInfo from './PokeInfo';

// @ts-ignore
const PokeCard = () => {
    return (
        <>
            {'' ? (
                <p>loading...</p>
            ) : (
                // @ts-ignore

                <div className="flex items-center mb-4 justify-between box-border w-[250px] shadow-md rounded-xl p-4 bg-blue-200">
                    <p>id</p>
                    <img src="" alt="poke img" />
                    <p>name</p>
                </div>
            )}
        </>
    );
};

export default PokeCard;
