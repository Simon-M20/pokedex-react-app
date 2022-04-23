import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokeBall from "../../../Assets/pokeball.jpg";
import PokedexContext from "../../../Context/GlobalContext";
import {
    Colors,
    getPokemonLocation,
    getPokemonSpecies,
    searchPokemon,
} from "../../../Helpers/PokeApi";

const PokemonCard = ({ id, name, types }) => {
    const navigate = useNavigate();

    const {
        setLoading,
        setError,
        setSinglePokemon,
        setPokemonAbout,
        setPokeLocation,
    } = useContext(PokedexContext);
    // console.log(types);

    const main_types = Object.keys(Colors);
    const poke_types = types.map((type) => type.type.name);
    const type = main_types.find((type) => poke_types.indexOf(type) > -1);
    const color = Colors[type];

    const styleBg = {
        backgroundColor: `${color}`,
    };

    // const typeDefense = types.map((type) =>
    //   getPokemonEffectiveness(type.type.url)
    // );

    // console.log(typeDefense);

    const handleClick = async () => {
        setLoading(true);

        try {
            const pokemonData = await searchPokemon(name);
            const pokemonAbout = await getPokemonSpecies(
                pokemonData.species.url
            );
            const pokemonLocation = await getPokemonLocation(name);
            // console.log(pokemonData.types);
            // console.log(pokemonAbout, "Species of pokemon");
            // console.log(pokemonLocation, "poke location");
            navigate(`/Pokemon/${name}`);
            setSinglePokemon(pokemonData);
            setPokemonAbout(pokemonAbout);
            setPokeLocation(pokemonLocation);
            // setError(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
            setSinglePokemon([]);
        }
    };

    return (
        <section
            className='pokemonCard cursor-pointer'
            style={styleBg}
            onClick={handleClick}
        >
            <h2 className='capitalize font-bold tracking-tighter md:text-lg text-sm text-white'>
                {name}
            </h2>
            <h3>#{String(`${id}`).padStart(3, "0")}</h3>
            <figure className='flex items-center justify-center'>
                <figcaption className='flex flex-col  justify-center items-center w-1/2'>
                    {types.map((type, index) => (
                        <small
                            key={index}
                            className='my-1 rounded-full md:text-base text-xs typeName'
                        >
                            {type.type.name}
                        </small>
                    ))}
                </figcaption>
                <div className='w-1/2 relative'>
                    <img className='pokeBall' src={PokeBall} alt='Pokeball' />
                    <img
                        className='pokemonImg'
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        // src={img}
                        alt={name}
                    />
                </div>
            </figure>
        </section>
    );
};

export default PokemonCard;
