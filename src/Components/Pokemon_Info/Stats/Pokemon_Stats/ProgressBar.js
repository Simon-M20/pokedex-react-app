const ProgressBar = ({ percentage, color, name }) => {
    const fillerStats = {
        height: "100%",
        transition: "width 1s ease-in-out",
        width: `${percentage}px`,
        backgroundColor: `${color}`,
        borderRadius: "inherit",
        textAlign: "left",
        position: "absolute",
        left: "0",
    };

    return (
        <article className='flex items-center justify-between w-full mb-2.5'>
            <div className='flex items-center justify-between md:w-1/4 w-1/2 pr-4'>
                <p className='pr-3 text-gray-400 font-medium capitalize'>
                    {name}
                </p>
                <span className='font-medium'>{percentage}</span>
            </div>
            <div className='progressBar'>
                <span style={fillerStats}></span>
            </div>
        </article>
    );
};

export default ProgressBar;
