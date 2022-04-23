import GenerationCard from "./GenerationCard";
import "./Generation.css";
import GenerationI from "../../../Assets/Generations/Generation_I.jpg";
import GenerationII from "../../../Assets/Generations/Generation_II.jpg";
import GenerationIII from "../../../Assets/Generations/Generation_III.jpg";
import GenerationIV from "../../../Assets/Generations/Generation_IV.jpg";
import GenerationV from "../../../Assets/Generations/Generation_V.jpg";
import GenerationVI from "../../../Assets/Generations/Generation_VI.png";
import GenerationVII from "../../../Assets/Generations/Generation_VII.jpg";
import GenerationVIII from "../../../Assets/Generations/Generation_VIII.jpg";

const GenerationSection = ({ searchForGeneration }) => {
    const Regions = [
        {
            name: "Kanto",
            generation: "I",
            limit: 151,
            offset: 0,
            img: `${GenerationI}`,
        },
        {
            name: "Johto",
            generation: "II",
            limit: 100,
            offset: 151,
            img: `${GenerationII}`,
        },
        {
            name: "Hoenn",
            generation: "III",
            limit: 135,
            offset: 251,
            img: `${GenerationIII}`,
        },
        {
            name: "Sinnoh",
            limit: 108,
            generation: "VI",
            offset: 386,
            img: `${GenerationIV}`,
        },
        {
            name: "Unova",
            generation: "V",
            limit: 155,
            offset: 494,
            img: `${GenerationV}`,
        },
        {
            name: "Kalos",
            limit: 72,
            generation: "VI",
            offset: 649,
            img: `${GenerationVI}`,
        },
        {
            name: "Alola",
            limit: 88,
            generation: "VII",
            offset: 721,
            img: `${GenerationVII}`,
        },
        {
            name: "Galar",
            limit: 89,
            generation: "VIII",
            offset: 809,
            img: `${GenerationVIII}`,
        },
    ];

    return (
        <section
            className={`${
                searchForGeneration
                    ? "generationContainer active"
                    : " generationContainer"
            }`}
        >
            <article className='generationSection'>
                <h1 className='text-lg font-extrabold pb-4'>Generation</h1>
                <article className='grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-items-center gap-x-3 md:gap-x-4 md:gap-y-5 gap-y-3 md:w-11/12 w-full mx-auto pb-4 overflow-y-scroll h-full'>
                    {Regions.map((generation) => (
                        <GenerationCard
                            key={generation.name}
                            generation={generation.generation}
                            img={generation.img}
                            limit={generation.limit}
                            offset={generation.offset}
                        />
                    ))}
                </article>
            </article>
        </section>
    );
};

export default GenerationSection;
