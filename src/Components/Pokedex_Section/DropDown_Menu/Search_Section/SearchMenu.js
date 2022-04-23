const SearchMenu = ({ searchActive, setSearchActive, setDropActive }) => {
    return (
        <button
            className='searchMenu'
            onClick={() => {
                setSearchActive(!searchActive);
                setDropActive(false);
            }}
        >
            <p>Search</p>
            <span className='material-icons-outlined icons'>search</span>
        </button>
    );
};

export default SearchMenu;
