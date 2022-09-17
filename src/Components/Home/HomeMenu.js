import { useContext } from "react";
import { Link } from "react-router-dom";
import PokeBall from "../../Assets/pokeball.jpg";
import PokedexContext from "../../Context/GlobalContext";
import "./HomeMenu.css";

const HomeMenu = () => {
    const { getAllPokemons, setSinglePokemon } = useContext(PokedexContext);

    return (
        <section className='grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 gap-y-6 px-3 md:w-11/12 w-full mx-auto md:pt-8 md:pb-16 pt-6 pb-12'>
            <figure className='cardMenu'>
                <Link
                    to='Pokedex'
                    onClick={() => {
                        getAllPokemons();
                        setSinglePokemon([]);
                    }}>
                    <img className='poke1 poke' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Pokedex</figcaption>
                    <img className='poke2 poke' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Moves'>
                    <img className='poke1 poke' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Moves</figcaption>
                    <img className='poke2 poke' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Abilities'>
                    <img className='poke1 poke' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Abilities</figcaption>
                    <img className='poke2 poke' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Berries'>
                    <img className='poke1 poke' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Berries</figcaption>
                    <img className='poke2 poke' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Location'>
                    <img className='poke1 poke' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Location</figcaption>
                    <img className='poke2 poke' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>

            <figure className='cardMenu'>
                <Link to='Type_Charts'>
                    <img className='poke1 poke' src={PokeBall} alt='Pokeball' />
                    <figcaption className='text-lg'>Type Charts</figcaption>
                    <img className='poke2 poke' src={PokeBall} alt='Pokeball' />
                </Link>
            </figure>
        </section>
    );
};

export default HomeMenu;
