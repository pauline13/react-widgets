import React from 'react';

//@ts-ignore
const PokeInfo = () => {
    return (
        <>
            {'' ? (
                'choose a pokemon'
            ) : (
                <div className="flex flex-col justify-center items-center w-[230px] h-[250px] bg-violet-200 rounded-xl shadow-md">
                    <p className="pb-4 text-xl">{}</p>
                    <img
                        className="w-[100px]"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`}
                        alt=""
                    />
                    <div className="pt-4"></div>
                </div>
            )}
        </>
    );
};

export default PokeInfo;
