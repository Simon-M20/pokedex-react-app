import PikaLoader from "../../../Assets/Pika_loader.gif";
// import PokeLoader from "../../../Assets/pokeball.jpg";
import "./Loader.css";

const Loader = () => {
    return (
        <figure className='loader'>
            <img className='scale-150' src={PikaLoader} alt='Running Pikachu' />
            <figcaption className='pt-4 ml-4 text-xl'>Loading ...</figcaption>
        </figure>
    );
};

export default Loader;
