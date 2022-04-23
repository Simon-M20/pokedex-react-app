import { useContext } from "react";
import PokedexContext from "../../../../Context/GlobalContext";
import "./BarStats.css";
import ProgressBar from "./ProgressBar";

const BarStats = ({ color }) => {
    const { singlePokemon } = useContext(PokedexContext);

    return (
        <section className='mb-4'>
            {singlePokemon.stats.map((stats, index) => (
                <ProgressBar
                    key={index}
                    percentage={stats.base_stat}
                    name={stats.stat.name}
                    color={color}
                />
            ))}
        </section>
    );
};

export default BarStats;
