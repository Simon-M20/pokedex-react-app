import Bug from "../../../../Assets/Types/bug.png";
import Dark from "../../../../Assets/Types/dark.png";
import Dragon from "../../../../Assets/Types/dragon.png";
import Electric from "../../../../Assets/Types/electric.png";
import Fairy from "../../../../Assets/Types/fairy.png";
import Fighting from "../../../../Assets/Types/fighting.png";
import Fire from "../../../../Assets/Types/fire.png";
import Flying from "../../../../Assets/Types/flying.png";
import Ghost from "../../../../Assets/Types/ghost.png";
import Grass from "../../../../Assets/Types/grass.png";
import Ground from "../../../../Assets/Types/ground.png";
import Ice from "../../../../Assets/Types/ice.png";
import Normal from "../../../../Assets/Types/normal.png";
import Poison from "../../../../Assets/Types/poison.png";
import Psychic from "../../../../Assets/Types/psychic.png";
import Rock from "../../../../Assets/Types/rock.png";
import Steel from "../../../../Assets/Types/steel.png";
import Water from "../../../../Assets/Types/water.png";
import { Colors } from "../../../../Helpers/PokeApi";

const TypesGrid = () => {
    return (
        <div className='grid grid-cols-2 justify-items-center gap-x-2 gap-y-3  mx-auto z-10'>
            <button className='font-medium border px-5 rounded-lg h-10 flex items-center justify-center'>
                All Types
            </button>
            <figure
                // onClick={() => filter("grass")}
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.grass}` }}
            >
                <img className='w-6 p-1 h-6' src={Grass} alt='Grass' />
                <figcaption className='pl-1 text-white pr-1.5'>
                    Grass
                </figcaption>
            </figure>

            <figure
                // onClick={() => filter("fire")}
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.fire}` }}
            >
                <img className='w-6 p-0.5 h-6' src={Fire} alt='fire' />
                <figcaption className='text-white pl-1 pr-1.5'>Fire</figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.water}` }}
            >
                <img className='w-6 p-1 h-6' src={Water} alt='Water' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Water
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.electric}` }}
            >
                <img className='w-6 p-1 h-6' src={Electric} alt='Electric' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Electric
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.bug}` }}
            >
                <img className='w-6 p-1 h-6' src={Bug} alt='Bug' />
                <figcaption className='text-white pl-1 pr-1.5'>Bug</figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.poison}` }}
            >
                <img className='w-6 p-1 h-6' src={Poison} alt='Poison' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Poison
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.flying}` }}
            >
                <img className='w-6 p-1 h-6' src={Flying} alt='Flying' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Flying
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.normal}` }}
            >
                <img className='w-6 p-1 h-6' src={Normal} alt='Normal' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Normal
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.ground}` }}
            >
                <img className='w-6 p-1 h-6' src={Ground} alt='Ground' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Ground
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.fairy}` }}
            >
                <img className='w-6 p-1 h-6' src={Fairy} alt='Fairy' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Fairy
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.fighting}` }}
            >
                <img className='w-6 p-1 h-6' src={Fighting} alt='Fighting' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Fighting
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.psychic}` }}
            >
                <img className='w-6 p-1 h-6' src={Psychic} alt='Psychic' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Psychic
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.rock}` }}
            >
                <img className='w-6 p-1 h-6' src={Rock} alt='Rock' />
                <figcaption className='text-white pl-1 pr-1.5'>Rock</figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.ice}` }}
            >
                <img className='w-6 p-1 h-6' src={Ice} alt='Ice' />
                <figcaption className='text-white pl-1 pr-1.5'>Ice</figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.dragon}` }}
            >
                <img className='w-6 p-1 h-6' src={Dragon} alt='Dragon' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Dragon
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.dark}` }}
            >
                <img className='w-6 p-1 h-6' src={Dark} alt='Dark' />
                <figcaption className='text-white pl-1 pr-1.5'>Dark</figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.ghost}` }}
            >
                <img className='w-6 p-1 h-6' src={Ghost} alt='Ghost' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Ghost
                </figcaption>
            </figure>

            <figure
                className='px-2.5 py-1 h-10 rounded-lg cursor-pointer flex items-center'
                style={{ backgroundColor: `${Colors.steel}` }}
            >
                <img className='w-6 p-1 h-6' src={Steel} alt='Steel' />
                <figcaption className='text-white pl-1 pr-1.5'>
                    Steel
                </figcaption>
            </figure>
        </div>
    );
};

export default TypesGrid;
