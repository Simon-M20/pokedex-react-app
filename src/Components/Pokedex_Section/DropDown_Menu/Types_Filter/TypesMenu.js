const TypesMenu = ({ typesFilter, setTypesFilter }) => {
    const handleClick = () => {
        setTypesFilter(!typesFilter);
    };

    return (
        <button className='typeMenu' onClick={handleClick}>
            <p>All Types</p>
            <span className='material-icons-outlined icons'>
                filter_vintage
            </span>
        </button>
    );
};

export default TypesMenu;
