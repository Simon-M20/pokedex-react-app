import { useContext, useState } from "react";
import PokedexContext from "../../Context/GlobalContext";
import { getPokemonData } from "../../Helpers/PokeApi";
import About from "./About/About";
import Evolution from "./Evolution/Evolution";
import Moves from "./Moves/Moves";
import Stats from "./Stats/Stats";

const PokemonDetails = ({
    color,
    locationActive,
    setLocationActive,
    types,
}) => {
    const { pokemonAbout, setEvolChain } = useContext(PokedexContext);

    const [about, setAbout] = useState(true);
    const [stats, setStats] = useState(false);
    const [evolution, setEvolution] = useState(false);
    const [moves, setMoves] = useState(false);

    const handleClickEvolution = async () => {
        try {
            const evolChain = await getPokemonData(
                pokemonAbout.evolution_chain.url
            );
            console.log(evolChain, "evol Chain");

            setEvolChain(evolChain);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className='pokeDetails'>
            <section className='flex items-center justify-between border-b mb-4 text-sm w-full'>
                <button
                    className={`${about ? "detailsBtn active" : "detailsBtn"}`}
                    onClick={() => {
                        setAbout(!about);
                        setEvolution(false);
                        setMoves(false);
                        setStats(false);
                    }}
                >
                    About
                </button>
                <button
                    className={`${stats ? "detailsBtn active" : "detailsBtn"}`}
                    onClick={() => {
                        setAbout(false);
                        setEvolution(false);
                        setMoves(false);
                        setStats(!stats);
                    }}
                >
                    Base Stats
                </button>
                <button
                    className={`${
                        evolution ? "detailsBtn active" : "detailsBtn"
                    }`}
                    onClick={() => {
                        setAbout(false);
                        setEvolution(!evolution);
                        setMoves(false);
                        setStats(false);
                        handleClickEvolution();
                    }}
                >
                    Evolution
                </button>
                <button
                    className={`${moves ? "detailsBtn active" : "detailsBtn"}`}
                    onClick={() => {
                        setAbout(false);
                        setEvolution(false);
                        setMoves(!moves);
                        setStats(false);
                    }}
                >
                    Moves
                </button>
            </section>
            {about && (
                <About
                    about={about}
                    color={color}
                    locationActive={locationActive}
                    setLocationActive={setLocationActive}
                />
            )}
            {stats && <Stats color={color} stats={stats} types={types} />}
            {evolution && <Evolution evolution={evolution} />}
            {moves && <Moves moves={moves} />}
        </section>
    );
};

export default PokemonDetails;
