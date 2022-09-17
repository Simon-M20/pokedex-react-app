import PokeNews from "./PokeNews";

const NewsSection = () => {
    return (
        <section className='md:pt-16 pt-10 px-4 md:w-11/12 mx-auto w-full'>
            <div className='flex justify-between items-center sticky top-0'>
                <h2 className='font-bold tracking-wide md:text-3xl text-xl'>
                    Pokémon News
                </h2>
                <button className='violetBtn font-medium md:text-lg text-base pt-1.5'>
                    View All
                </button>
            </div>
            <section className='my-2'>
                <PokeNews />
                <PokeNews />
                <PokeNews />
                <PokeNews />
                <PokeNews />
                <PokeNews />
                <PokeNews />
                {/* <PokeNews />
                <PokeNews /> */}
            </section>
        </section>
    );
};

export default NewsSection;
