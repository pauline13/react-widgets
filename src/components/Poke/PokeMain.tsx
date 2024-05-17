import { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';
import PokeInfo from './PokeInfo';
import Button, { ButtonSize, ButtonTheme } from '../Button';
import { PokeApiResponse, Pokemon } from '../../types/pokeTypes';

const PokeMain = () => {
    const [pokeData, setPokeData] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/');

    const [nextUrl, setNextUrl] = useState<string>();
    const [prevUrl, setPrevUrl] = useState<string>();

    const [pokeInfo, setPokeInfo] = useState<Pokemon | null>();

    const getPokeFunc = async () => {
        setLoading(true);
        const res = await axios.get<PokeApiResponse>(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getOnePoke(res.data.results);
        setLoading(false);
    };

    const getOnePoke = async (res: PokeApiResponse['results']) => {
        setLoading(true);
        res.map(async (poke) => {
            const result = await axios.get<Pokemon>(poke.url);
            setPokeData((state) => {
                state = [...state, result.data];
                state.sort((a, b) => (a.id > b.id ? 1 : -1));
                return state;
            });
        });
    };

    const getPrevPage = () => {
        setPokeData([]);
        setUrl(prevUrl!);
    };

    const getNextPage = () => {
        setPokeData([]);
        setUrl(nextUrl!);
    };

    useEffect(() => {
        getPokeFunc();
    }, [url]);

    return (
        <div className="flex mt-4 gap-12">
            <div>
                <div className="grid lg:grid-cols-2 gap-4">
                    <PokeCard
                        className="text-lg"
                        pokemon={pokeData}
                        loading={loading}
                        infoPoke={(poke) => setPokeInfo(poke)}
                    />
                </div>
                <div className="flex mt-5 gap-2">
                    {prevUrl && (
                        <Button
                            onClick={getPrevPage}
                            theme={ButtonTheme.DELETE}
                            size={ButtonSize.M}
                        >
                            Previous
                        </Button>
                    )}
                    {nextUrl && (
                        <Button
                            onClick={getNextPage}
                            theme={ButtonTheme.DELETE}
                            size={ButtonSize.M}
                        >
                            Next
                        </Button>
                    )}
                </div>
            </div>
            <div>
                <PokeInfo data={pokeInfo} />
            </div>
        </div>
    );
};

export default PokeMain;
