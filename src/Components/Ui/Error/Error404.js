import { Link } from "react-router-dom";
import PokeApiImg from "../../../Assets/pokeapi.png";
import PikachuHurt from "../../../Assets/Pikachu_Hurt.png";

const Error404 = () => {
    return (
        <section className='flex flex-col justify-center pt-6 items-center w-full mx-auto z-20'>
            {/* <article className="w-full flex justify-center items-center px-4"> */}
            <figure className='flex justify-center items-center'>
                <Link to='/' className='flex items-center'>
                    <span
                        className='material-icons-outlined mr-2 pt-2 text-4xl'
                        title='Back to the Menu'
                    >
                        reply
                    </span>
                    <img
                        className='w-1/2'
                        src={PokeApiImg}
                        alt='Pokeapi Title'
                        title='Back to the Menu'
                    />
                </Link>
            </figure>
            {/* </article> */}
            <figure className='flex flex-col justify-center items-center mt-16'>
                <img
                    className='w-1/3'
                    src={PikachuHurt}
                    alt='Pikachu very hurt'
                />
                <figcaption className='w-4/5 text-center md:text-2xl text-medium text-xl pt-4'>
                    Well, seems like something went wrong. Dammit{" "}
                    <span role='img' aria-label='sad-icon'>
                        😥
                    </span>
                    . Mind to try again later?
                </figcaption>
            </figure>
        </section>
    );
};

export default Error404;
