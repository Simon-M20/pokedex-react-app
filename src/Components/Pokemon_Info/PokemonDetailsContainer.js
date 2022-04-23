import { useContext, useState } from "react";
import { useParams } from "react-router";
import PokedexContext from "../../Context/GlobalContext";
import Dots from "../../Assets/dotted.png";
import { Colors } from "../../Helpers/PokeApi";
import Error404 from "../Ui/Error/Error404";
import swal from "sweetalert";
import SinglePokeCard from "./SinglePokeCard";
import "./PokemonDetailsContainer.css";
import PokemonDetails from "./PokemonDetails";
import LocationList from "./About/Pokemon_Details/Location/LocationList";

const PokemonDetailsContainer = () => {
    const { name } = useParams();
    const { singlePokemon, error } = useContext(PokedexContext);
    const [locationActive, setLocationActive] = useState(false);

    if (error || singlePokemon === [] || singlePokemon.types === undefined) {
        swal("不好意思!", `那个 Pokémon ("${name}") 不存在`, "warning");
        return <Error404 />;
    }

    const main_types = Object.keys(Colors);
    const poke_types = singlePokemon.types.map((type) => type.type.name);
    const type = main_types.find((type) => poke_types.indexOf(type) > -1);
    const color = Colors[type];

    const styleBg = {
        backgroundColor: `${color}`,
    };

    return (
        <main className='detailsContainer' style={styleBg}>
            <img className='dotsBg' src={Dots} alt='Dots backgrond' />
            <SinglePokeCard
                name={name}
                id={singlePokemon.id}
                types={singlePokemon.types}
            />
            <PokemonDetails
                types={singlePokemon.types}
                color={color}
                locationActive={locationActive}
                setLocationActive={setLocationActive}
            />
            {locationActive && (
                <LocationList
                    locationActive={locationActive}
                    setLocationActive={setLocationActive}
                />
            )}
        </main>
    );
};

export default PokemonDetailsContainer;
