import { useContext } from "react";
import Pokeball from "../../../Assets/pokeball.jpg";
import PokedexContext from "../../../Context/GlobalContext";
import { getPokemonData, getPokemons } from "../../../Helpers/PokeApi";

const GenerationCard = ({ img, generation, limit, offset }) => {
    const { setAllPokemons, setLoading } = useContext(PokedexContext);

    const getPokemonsForGeneration = async () => {
        setLoading(true);

        try {
            const data = await getPokemons(limit, offset);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });
            const results = await Promise.all(promises);
            setAllPokemons(results);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const handleClick = () => {
        getPokemonsForGeneration();
    };
    // console.log(name);
    return (
        <figure className='generationCard' onClick={handleClick}>
            <img className='generationPoke' src={Pokeball} alt='Pokeball' />
            <figcaption className='md:text-base text-xs text-center font-medium'>
                Generation {generation}
            </figcaption>
            <img
                className='generationGroup w-11/12 mx-auto'
                src={img}
                alt='Pokemon Generation'
            />
        </figure>
    );
};

export default GenerationCard;
