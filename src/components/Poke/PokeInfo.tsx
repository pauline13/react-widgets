import { PokeInfoProps } from '../../types/pokeTypes';

const PokeInfo = ({ data }: PokeInfoProps) => {
    return (
        <>
            {data ? (
                <>
                    <div className="flex flex-col fixed items-center w-[300px] p-4 bg-blue-200 rounded-xl shadow-md">
                        <p className="mb-4 text-xl font-bold uppercase">{data.name}</p>
                        <img
                            className="w-[150px] h-[150px]"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                            alt=""
                        />
                        <div className="flex space-between w-full justify-center gap-2 mt-4">
                            {data.abilities.map((abilityItem) => (
                                <div key={abilityItem.ability.name}>
                                    <p className="p-1 bg-orange-200 rounded-lg">
                                        {abilityItem.ability.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white w-full rounded-xl p-4 mt-4">
                            {data.stats.map((poke) => {
                                return (
                                    <div key={poke.stat.name}>
                                        <p>
                                            {poke.stat.name}:
                                            <span className="pl-1">{poke.base_stat}</span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <p className="text-lg">Choose a Pokemon</p>
            )}
        </>
    );
};

export default PokeInfo;
