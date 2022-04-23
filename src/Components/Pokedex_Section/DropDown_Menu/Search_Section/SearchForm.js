import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import PokedexContext from "../../../../Context/GlobalContext";
import { getPokemonLocation, searchPokemon } from "../../../../Helpers/PokeApi";
import "./SearchForm.css";

const SearchForm = ({ searchActive, setSearchActive }) => {
    const navigate = useNavigate();
    const { setLoading, setSinglePokemon, setError, setPokeLocation } =
        useContext(PokedexContext);

    const [pokemon, setPokemon] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const pokemonData = await searchPokemon(
                pokemon.toLocaleLowerCase()
            );
            const pokemonLocation = await getPokemonLocation(
                pokemon.toLocaleLowerCase()
            );

            // console.log(pokemonData);

            navigate(`/Pokemon/${pokemon}`);

            if (pokemonData !== undefined) {
                setSinglePokemon(pokemonData);
                setPokeLocation(pokemonLocation);

                // console.log(pokemonData, "pokemonData");
                setError(false);
            } else {
                setError(true);
                // console.log("Ha Ocurrido un error en el pokemonData");
            }

            setSearchActive(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
            setSinglePokemon([]);
        }
    };

    // console.log(pokemon);

    return (
        <section
            className={`${
                searchActive ? "searchSection active" : "searchSection"
            }`}
        >
            <form className='searchForm' onSubmit={handleSubmit}>
                <div className='relative w-11/12 flex items-center'>
                    <span className='material-icons-outlined absolute left-3.5'>
                        search
                    </span>
                    <input
                        type='search'
                        autoComplete='off'
                        placeholder='Search Pokémon'
                        className='pl-11 w-full pr-4 py-2 rounded-full outline-none border'
                        onChange={(e) => setPokemon(e.target.value)}
                    />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
