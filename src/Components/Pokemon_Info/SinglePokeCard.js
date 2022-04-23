import { useContext } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../../Assets/pokeball.jpg";
import PokedexContext from "../../Context/GlobalContext";
import swal from "sweetalert";

const SinglePokeCard = ({ name, id, types }) => {
    const { pokemonAbout } = useContext(PokedexContext);

    const handleClick = (e) => {
        if (e.target.textContent === "favorite_border") {
            e.target.textContent = "favorite";

            swal(`A wild ${name} appeared! What do you want to do?`, {
                buttons: {
                    cancel: "Run away!",
                    catch: {
                        text: "Throw Pokéball!",
                        value: "catch",
                    },
                    defeat: true,
                },
            }).then((value) => {
                switch (value) {
                    case "defeat":
                        swal(`${name} fainted! You gained 500 XP!`);
                        break;

                    case "catch":
                        swal("Gotcha!", `${name} was caught!`, "success");
                        break;

                    default:
                        swal("Got away safely!");
                }
            });
        } else {
            e.target.textContent = "favorite_border";
        }
    };

    return (
        <section className='pokeCard'>
            <section className='flex justify-between items-center pb-5 pt-8 relative'>
                <Link to='/Pokedex' className='backBg'>
                    <span className='material-icons-outlined'>arrow_back</span>
                </Link>
                <span
                    className='material-icons-outlined cursor-pointer'
                    onClick={(e) => handleClick(e)}
                >
                    favorite_border
                </span>
            </section>
            <figure className='flex flex-col items-center justify-center w-full'>
                <figcaption className='flex flex-col justify-between items-start w-full'>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='capitalize text-3xl font-extrabold tracking-wider'>
                            {name}
                        </h1>
                        <span className='font-bold'>
                            #{String(`${id}`).padStart(3, "0")}
                        </span>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex items-center'>
                            {types.map((type, index) => (
                                <small
                                    key={index}
                                    className='my-2 mx-1 rounded-full md:text-base text-sm typeName'
                                >
                                    {type.type.name}
                                </small>
                            ))}
                        </div>
                        <span className='font-medium'>
                            {
                                pokemonAbout.genera.find(
                                    (gen) => gen.language.name === "en"
                                )?.genus
                            }
                        </span>
                    </div>
                </figcaption>
                <div className='relative flex justify-center items-center overflow-hidden w-full mt-6'>
                    <span className='absolute top-0 md:text-7xl text-3xl opacity-75 font-bold'>
                        {
                            pokemonAbout.genera.find(
                                (gen) => gen.language.name === "ja-Hrkt"
                            )?.genus
                        }
                    </span>
                    <img
                        className='relative z-10 w-3/4 -bottom-4'
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={name}
                    />
                    <img
                        className='pokemonBg rotar'
                        src={Pokeball}
                        alt='Pokeball'
                    />
                </div>
            </figure>
        </section>
    );
};

export default SinglePokeCard;
