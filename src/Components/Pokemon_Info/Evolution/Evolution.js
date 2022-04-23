// import { useContext } from "react";
// import PokedexContext from "../../../Context/GlobalContext";

// import Pokeball from "../../../Assets/pokeball.jpg";

const Evolution = ({ evolution }) => {
    //   const { evolChain } = useContext(PokedexContext);

    //   console.log(evolChain, "evolution Chain");

    return (
        <section
            className={`${
                evolution ? "evolutionSection active" : "evolutionSection"
            }`}
        >
            <h1>Evolution Chain</h1>
        </section>
    );
};

export default Evolution;
