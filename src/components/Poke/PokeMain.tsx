import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';
import PokeInfo from './PokeInfo';
import Button, { ButtonSize, ButtonTheme } from '../Button';

const PokeMain = () => {
    const [pokeData, setPokeData] = useState([]); // array for data
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/'); // request-url

    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const [pokeInfo, setPokeInfo] = useState();

    //@ts-ignore
    const getPokeFunc = async () => {
        setLoading(true);
        // loading and get pokemons API
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getOnePoke(res.data.results);
        setLoading(false);
    };

    // get a pokemon function
    //@ts-ignore
    const getOnePoke = async res => {
        setLoading(true);
        //@ts-ignore
        res.map(async poke => {
            const result = await axios.get(poke.url);
            setPokeData(state => {
                //@ts-ignore
                state = [...state, result.data];
                //@ts-ignore
                state.sort((a, b) => (a.id > b.id ? 1 : -1));
                return state;
            });
        });
    };

    useEffect(() => {
        getPokeFunc();
    }, [url]); //

    return (
        <>
            <div className="flex mt-4">
                <div className="basis-1/2">
                    <PokeCard
                        pokemon={pokeData}
                        loading={loading}
                        // @ts-ignore
                        infoPoke={poke => setPokeInfo(poke)}
                    />
                    <div className="flex">
                        {prevUrl && (
                            <Button
                                onClick={() => {
                                    setPokeData([]);
                                    //@ts-ignore
                                    setUrl(prevUrl);
                                }}
                                theme={ButtonTheme.DELETE}
                                size={ButtonSize.M}
                            >
                                Previous
                            </Button>
                        )}
                        {nextUrl && (
                            <Button
                                onClick={() => {
                                    setPokeData([]);
                                    //@ts-ignore
                                    setUrl(nextUrl);
                                }}
                                theme={ButtonTheme.DELETE}
                                size={ButtonSize.M}
                            >
                                Next
                            </Button>
                        )}
                    </div>
                </div>
                <div className="basis-1/2">
                    <p>poke info</p>
                    <PokeInfo data={pokeInfo} />
                </div>
            </div>
        </>
    );
};

export default PokeMain;
