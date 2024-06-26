import { useTranslation } from 'react-i18next';
import { PokemonInfoProps } from '../model/types';

const PokemonInfo = ({ data }: PokemonInfoProps) => {
    const { t } = useTranslation('pokemon');

    return (
        <>
            {data ? (
                <>
                    <div className="flex flex-col fixed items-center w-[300px] p-4 bg-primary text-text rounded-xl">
                        <p className="mb-4 text-xl font-bold uppercase">{data.name}</p>
                        <img
                            className="w-[150px] h-[150px]"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                            alt=""
                        />
                        <div className="flex space-between w-full justify-center gap-2 mt-4">
                            {data.abilities.map((abilityItem) => (
                                <div key={abilityItem.ability.name}>
                                    <p className="font-medium p-1 bg-secondary rounded-lg">
                                        {abilityItem.ability.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white w-full text-black rounded-xl p-4 mt-4">
                            {data.stats.map((pokemon) => {
                                return (
                                    <div key={pokemon.stat.name}>
                                        <p>
                                            <span className="font-medium">
                                                {pokemon.stat.name}:
                                            </span>
                                            <span className="pl-1">
                                                {pokemon.base_stat}
                                            </span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <p className="text-lg">{t('Выберите Покемона')}</p>
            )}
        </>
    );
};

export default PokemonInfo;
