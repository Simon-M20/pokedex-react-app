// import TypeDefense from "./Pokemon_Defense/TypeDefense";
import BarStats from "./Pokemon_Stats/BarStats";

const Stats = ({ stats, color, types }) => {
    return (
        <section
            className={`${stats ? "statsSection active" : "statsSection"}`}
        >
            <BarStats color={color} />
            {/* <TypeDefense types={types} /> */}
        </section>
    );
};

export default Stats;
