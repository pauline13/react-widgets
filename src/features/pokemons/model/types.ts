export interface Abilities {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface Pokemon {
    id: number;
    name: string;
    abilities: Abilities[];
    stats: Stats[];
    sprites: {
        front_default: string;
    };
}

export interface PokemonApiResponse {
    next: string;
    previous: string;
    results: {
        name: string;
        url: string;
    }[];
}

export interface PokemonInfoProps {
    data: Pokemon | null | undefined;
}

export interface PokemonCardProps {
    pokemon: Pokemon[];
    loading: boolean;
    infoPoke: (pokemon: Pokemon) => void;
    className?: string;
}
