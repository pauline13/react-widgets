import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import Button, { ButtonTheme, ButtonSize } from '../../../shared/ui/Button/Button';
import { Pokemon, PokeApiResponse } from '../model/types';
import PokeCard from './PokeCard';
import PokeInfo from './PokeInfo';

const PokeMain = () => {
    const [pokeData, setPokeData] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/');

    const [nextUrl, setNextUrl] = useState<string>();
    const [prevUrl, setPrevUrl] = useState<string>();

    const [pokeInfo, setPokeInfo] = useState<Pokemon | null>();

    const getPokeFunc = useCallback(async () => {
        setLoading(true);
        const res = await axios.get<PokeApiResponse>(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getOnePoke(res.data.results);
        setLoading(false);
    }, [url]);

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
        if (prevUrl !== undefined) {
            setUrl(prevUrl);
        }
    };

    const getNextPage = () => {
        setPokeData([]);
        if (nextUrl !== undefined) {
            setUrl(nextUrl);
        }
    };

    useEffect(() => {
        getPokeFunc();
    }, [getPokeFunc]);

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
