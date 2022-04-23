const SearchBar = () => {
    return (
        <form className='relative flex items-center w-4/5 mx-auto md:my-9 my-3'>
            <span className='material-icons-outlined absolute left-3.5'>
                search
            </span>
            <input
                type='search'
                autoComplete='off'
                placeholder='Search Pokemons, Moves, Ability, etc'
                className='pl-11 w-full pr-4 py-2 rounded-full outline-none bg-gray-100'
            />
        </form>
    );
};

export default SearchBar;
