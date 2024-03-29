import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';
import PokeInfo from './PokeInfo';

const PokeMain = () => {
    const [pokeData, setPokeData] = useState([]); // array for data
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/'); // request-url

    const [pokeInfo, setPokeInfo] = useState('');

    //@ts-ignore
    const getPokeFunc = async () => {
        setLoading(true);
        // loading and get pokemons API
        const res = await axios.get(url);
        getOnePoke(res.data.results);
        setLoading(false);
        console.log(pokeData);
    };

    // get a pokemon function
    //@ts-ignore
    const getOnePoke = async res => {
        setLoading(true);
        //@ts-ignore
        res.map(async poke => {
            // get a pokemon by personal link
            const result = await axios.get(poke.url);
            setPokeData(state => {
                //@ts-ignore
                state = [...state, result.data];
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
                    <PokeCard />
                </div>
                <div className="basis-1/2">
                    <PokeInfo />
                </div>
            </div>
        </>
    );
};

export default PokeMain;
