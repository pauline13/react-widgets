import React from 'react';

//@ts-ignore
const PokeInfo = ({ data }) => {
    return (
        <>
            {data ? (
                <>
                    <div className="flex flex-col justify-center items-center w-[230px] h-[250px] bg-violet-200 rounded-xl shadow-md">
                        <p className="pb-4 text-xl">{data.name}</p>
                        <img
                            className="w-[100px]"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                            alt=""
                        />
                        <div className="pt-4">
                            {data.abilities
                                //@ts-ignore
                                .map(ability => (
                                    <div key={ability.ability.name}>
                                        <p className="bg-orange-200 rounded-lg">
                                            {ability.ability.name}
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <div className="pt-4">
                            {data.stats
                                //@ts-ignore
                                .map(poke => {
                                    return (
                                        <div key={poke.stat.name}>
                                            <p className="">
                                                {poke.stat.name}:
                                                <span className="pl-2">
                                                    {poke.base_stat}
                                                </span>
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </>
            ) : (
                'choose a pokemon'
            )}
        </>
    );
};

export default PokeInfo;
