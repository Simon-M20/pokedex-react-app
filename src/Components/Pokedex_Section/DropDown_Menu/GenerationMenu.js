import { useContext } from "react";
import PokedexContext from "../../../Context/GlobalContext";
import { getPokemonData, getPokemons } from "../../../Helpers/PokeApi";

const GenerationMenu = () => {
    const { setAllPokemons, setLoading } = useContext(PokedexContext);

    const getAllPokemons = async () => {
        setLoading(true);

        try {
            const data = await getPokemons(1126, 0);
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

    return (
        <button
            className='genMenu'
            onClick={() => {
                getAllPokemons();
                // setDropActive(false);
            }}
        >
            <p>All Gen</p>
            <span className='material-icons-outlined icons'>bolt</span>
        </button>
    );
};

export default GenerationMenu;
