import "./MenuBtn.css";

const MenuBtn = ({ setSearchForGeneration, searchForGeneration }) => {
    const handleClick = () => {
        const menuBtn = document.querySelector(".menu-btn");

        if (menuBtn.classList.contains("is-active")) {
            menuBtn.classList.remove("is-active");
            // console.log(menuBtn);
        } else {
            menuBtn.classList.add("is-active");
            // console.log(menuBtn);
        }

        setSearchForGeneration(!searchForGeneration);
    };

    return (
        <button
            className='hamburger hamburger--emphatic menu-btn'
            type='button'
            onClick={handleClick}
        >
            <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
            </span>
        </button>
    );
};

export default MenuBtn;
