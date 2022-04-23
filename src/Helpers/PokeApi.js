const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const searchPokemon = async (pokemon) => {
    try {
        let url = `${baseUrl}/${pokemon}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getPokemons = async (limit = 24, offset = 0) => {
    try {
        let url = `${baseUrl}?limit=${limit}&offset=${offset}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getPokemonData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const Colors = {
    grass: "#87c75e",
    poison: "#b84fb9",
    fire: "#eb7471",
    flying: "#7dd3fc",
    water: "#8ac5f8",
    bug: "#70ccb0",
    normal: "#d4d4d4",
    electric: "#ffcf4a",
    ground: "#e1c169",
    fairy: "#FAD9E6",
    fighting: "#c03028",
    psychic: "#f85888",
    rock: "#b7a038",
    steel: "#b8b8d0",
    ice: "#98d9d9",
    ghost: "#715796",
    dragon: "#7138f8",
    dark: "#6e5849",
    unknown: "FFFDFDFD",
};

export const getPokemonSpecies = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getPokemonLocation = async (pokemon) => {
    try {
        const res = await fetch(`${baseUrl}/${pokemon}/encounters`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// // export const getPokemonEffectiveness = async (pokemonType) => {
// //     try {
// //         const res = await fetch(pokemonType);
// //         const data = await res.json();
// //         return data;
// //     } catch (err) {
// //         console.log(err);
// //     }
// // };

// export const pokemonEffectiveness = {
//     normal: {
//         ghost: 0,
//         fighting: 2,
//     },

//     fire: {
//         bug: 0.5,
//         fairy: 0.5,
//         fire: 0.5,
//         grass: 0.5,
//         ice: 0.5,
//         steel: 0.5,
//         ground: 2,
//         rock: 2,
//         water: 2,
//     },

//     water: {
//         fire: 0.5,
//         ice: 0.5,
//         steel: 0.5,
//         water: 0.5,
//         electric: 2,
//         grass: 2,
//     },

//     electric: {
//         electric: 0.5,
//         flying: 0.5,
//         steel: 0.5,
//         ground: 2,
//     },

//     grass: {
//         electric: 0.5,
//         grass: 0.5,
//         ground: 0.5,
//         water: 0.5,
//         bug: 2,
//         ice: 2,
//         flying: 2,
//         fire: 2,
//         poison: 2,
//     },

//     ice: {
//         ice: 0.5,
//         fire: 2,
//         fighting: 2,
//         rock: 2,
//         steel: 2,
//     },

//     fighting: {
//         bug: 0.5,
//         rock: 0.5,
//         dark: 0.5,
//         flying: 2,
//         psychic: 2,
//         fairy: 2,
//     },

//     poison: {
//         fighting: 0.5,
//         poison: 0.5,
//         bug: 0.5,
//         fairy: 0.5,
//         ground: 2,
//         psychic: 2,
//     },

//     ground: {
//         electric: 0,
//         poison: 0.5,
//         rock: 0.5,
//         water: 2,
//         grass: 2,
//         ice: 2,
//     },

//     flying: {
//         ground: 0,
//         grass: 0.5,
//         fighting: 0.5,
//         bug: 0.5,
//         electric: 2,
//         ice: 2,
//         rock: 2,
//     },

//     psychic: {
//         fighting: 0.5,
//         psychic: 0.5,
//         bug: 2,
//         ghost: 2,
//         dark: 2,
//     },

//     bug: {
//         grass: 0.5,
//         fighting: 0.5,
//         ground: 0.5,
//         fire: 2,
//         flying: 2,
//         rock: 2,
//     },

//     rock: {
//         normal: 0.5,
//         fire: 0.5,
//         poison: 0.5,
//         flying: 0.5,
//         water: 2,
//         grass: 2,
//         fighting: 2,
//         ground: 2,
//         steel: 2,
//     },

//     ghost: {
//         normal: 0,
//         fighting: 0,
//         poison: 0.5,
//         bug: 0.5,
//         ghost: 2,
//         dark: 2,
//     },

//     dragon: {
//         fire: 0.5,
//         water: 0.5,
//         electric: 0.5,
//         grass: 0.5,
//         ice: 2,
//         dragon: 2,
//         fairy: 2,
//     },

//     dark: {
//         psychic: 0,
//         ghost: 0.5,
//         dark: 0.5,
//         fighting: 2,
//         bug: 2,
//         fairy: 2,
//     },

//     steel: {
//         poison: 0,
//         normal: 0.5,
//         grass: 0.5,
//         ice: 0.5,
//         flying: 0.5,
//         psychic: 0.5,
//         bug: 0.5,
//         rock: 0.5,
//         dragon: 0.5,
//         steel: 0.5,
//         fairy: 0.5,
//         fire: 2,
//         fighting: 2,
//         ground: 2,
//     },

//     fairy: {
//         dragon: 0,
//         fighting: 0.5,
//         bug: 0.5,
//         dark: 0.5,
//         poison: 2,
//         steel: 2,
//     },
// };
