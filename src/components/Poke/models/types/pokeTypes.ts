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

export interface PokeApiResponse {
    next: string;
    previous: string;
    results: {
        name: string;
        url: string;
    }[];
}

export interface PokeInfoProps {
    data: Pokemon | null | undefined;
}

export interface PokeCardProps {
    pokemon: Pokemon[];
    loading: boolean;
    infoPoke: (poke: Pokemon) => void;
    className?: string;
}
