import { createContext, useState } from "react";
import { getPokemonData, getPokemons } from "../Helpers/PokeApi";

const PokedexContext = createContext();

// const Types = [
//   "all types",
//   "grass",
//   "bug",
//   "dark",
//   "dragon",
//   "electric",
//   "fairy",
//   "fighting",
//   "fire",
//   "flying",
//   "ghost",
//   "ground",
//   "ice",
//   "normal",
//   "poison",
//   "psychic",
//   "rock",
//   "steel",
//   "water"
// ];

const PokedexProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [allPokemons, setAllPokemons] = useState([]);
    const [singlePokemon, setSinglePokemon] = useState([]);
    const [pokemonAbout, setPokemonAbout] = useState([]);
    const [pokeLocation, setPokeLocation] = useState([]);
    const [pokeTypeDefense, setPokeTypeDefense] = useState([]);
    const [evolChain, setEvolChain] = useState([]);
    const [evolFrom, setEvolFrom] = useState([]);
    // const [page, setPage] = useState(0);
    // const [total, setTotal] = useState(0);

    const getAllPokemons = async () => {
        setLoading(true);

        try {
            const data = await getPokemons(151, 0);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });
            const results = await Promise.all(promises);
            setAllPokemons(results);
            setSinglePokemon([]);
            // setTotal(Math.ceil(data.count / 24));
            // setTimeout(() => {
            setLoading(false);
            // }, 3000);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    const data = {
        loading,
        setLoading,
        error,
        setError,
        allPokemons,
        setAllPokemons,
        getAllPokemons,
        singlePokemon,
        setSinglePokemon,
        pokemonAbout,
        setPokemonAbout,
        pokeLocation,
        setPokeLocation,
        pokeTypeDefense,
        setPokeTypeDefense,
        setEvolChain,
        evolChain,
        setEvolFrom,
        evolFrom,
    };

    return (
        <PokedexContext.Provider value={data}>
            {children}
        </PokedexContext.Provider>
    );
};

export { PokedexProvider };
export default PokedexContext;
