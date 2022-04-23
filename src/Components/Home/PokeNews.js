import PokemonRush from "../../Assets/Pokemon_Rush.png";

const PokeNews = () => {
    return (
        <figure className='w-full flex justify-between items-center py-8 border-b newsCard'>
            <figcaption className='leading-relaxed w-2/3'>
                <p className='font-medium md:text-lg lg:text-xl text-sm'>
                    Pokémon Rumble Rush Arrive Soon
                </p>
                <small className='lg:text-lg md:text-base text-xs rumbleDate'>
                    15 May 2019
                </small>
            </figcaption>
            <img
                className='pokeRush'
                src={PokemonRush}
                alt='Pokemon Rush Evolution'
            />
        </figure>
    );
};

export default PokeNews;
