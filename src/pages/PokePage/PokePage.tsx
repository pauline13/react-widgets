import React from 'react';
import PokeCard from '../../components/Poke/PokeCard';
import PokeMain from '../../components/Poke/PokeMain';

const PokePage = () => {
    return (
        <div className="">
            Pokemons
            <PokeMain />
        </div>
    );
};

export default PokePage;

// сделать запрос к REST API, получить конкретного покемона
// вывести в лист список покемонов (5-10 шт)
// отфильтровать по алфавиту список покемонов
