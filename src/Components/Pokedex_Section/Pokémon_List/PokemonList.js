import { useContext } from "react";
import PokedexContext from "../../../Context/GlobalContext";
import Error404 from "../../Ui/Error/Error404";
import Loader from "../../Ui/Loader/Loader";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    const { loading, allPokemons } = useContext(PokedexContext);

    if (loading) {
        return <Loader />;
    }

    if (allPokemons.length <= 0 || allPokemons === []) return <Error404 />;

    return (
        <section className='grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pb-10 z-10'>
            {allPokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    name={pokemon.name}
                    id={pokemon.id}
                    // img={pokemon.sprites.other.official-artwork.front_default}
                    types={pokemon.types}
                />
            ))}
        </section>
    );
};

export default PokemonList;
