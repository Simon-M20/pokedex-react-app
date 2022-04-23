import { useContext } from "react";
import PokedexContext from "../../../../../Context/GlobalContext";

const Training = () => {
    const { singlePokemon, pokemonAbout } = useContext(PokedexContext);

    return (
        <section className='mt-3 text-base'>
            <p className='font-bold mb-3'>Training</p>
            <div className='flex items-center my-2'>
                <p
                    className='text-gray-400 font-medium'
                    title='The base experience gained for defeating this Pokémon.'
                >
                    Base Experience
                </p>
                <span className='pl-5'>
                    {singlePokemon.base_experience} EXP
                </span>
            </div>
            <div className='flex items-center my-2'>
                <p className='text-gray-400 font-medium'>Base Happiness</p>
                <span className='pl-5'>
                    {((pokemonAbout.base_happiness / 255) * 100).toFixed(1)} %
                </span>
            </div>
            <div className='flex items-center my-2'>
                <p className='text-gray-400 font-medium'>Catch Rate</p>
                <span className='pl-5'>
                    {((pokemonAbout.capture_rate / 255) * 100).toFixed(1)} %
                </span>
            </div>
            <div className='flex items-center my-2'>
                <p className='text-gray-400 font-medium'>Growth Rate</p>
                <span className='pl-5'>{pokemonAbout.growth_rate.name}</span>
            </div>
        </section>
    );
};

export default Training;
