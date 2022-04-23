import "./MenuList.css";

const MenuListBtn = ({ dropActive, setDropActive }) => {
    const handleClick = () => {
        const menuBtn = document.querySelector(".menuList");

        if (menuBtn.classList.contains("is-active")) {
            menuBtn.classList.remove("is-active");
            // console.log(menuBtn);
        } else {
            menuBtn.classList.add("is-active");
            // console.log(menuBtn);
        }

        setDropActive(!dropActive);
    };

    return (
        <button
            className='hamburger-list hamburger--vortex menuList'
            type='button'
            onClick={handleClick}
        >
            <span className='hamburger-list--box'>
                <span className='hamburger-list-inner'></span>
            </span>
        </button>
    );
};

export default MenuListBtn;
