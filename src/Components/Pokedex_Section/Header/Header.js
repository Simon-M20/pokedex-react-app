import { Link } from "react-router-dom";
import MenuBtn from "../../Ui/Menu/MenuBtn";
// import Pagination from "../Pagination/Pagination";

// padding: 68px 38px 0;
const Header = ({ setSearchForGeneration, searchForGeneration }) => {
    const paddingStyle = {
        padding: "68px 38px 0",
    };

    return (
        <header className='sticky top-0 z-20 pb-2'>
            <section
                className='flex items-center justify-between'
                style={paddingStyle}
            >
                <Link to='/'>
                    <span className='material-icons-outlined'>arrow_back</span>
                </Link>
                <MenuBtn
                    setSearchForGeneration={setSearchForGeneration}
                    searchForGeneration={searchForGeneration}
                />
            </section>
            <section className='flex justify-between items-center'>
                <h1 className='pl-4 md:pl-16 text-3xl font-bold tracking-tighter py-5'>
                    Pokedex
                </h1>
                {/* <Pagination /> */}
            </section>
        </header>
    );
};

export default Header;
