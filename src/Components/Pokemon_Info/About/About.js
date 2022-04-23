import Breeding from "./Pokemon_Details/Bio_&_Breeding/Breeding";
import Location from "./Pokemon_Details/Location/Location";
import Training from "./Pokemon_Details/Training/Training";

const About = ({ color, locationActive, setLocationActive, about }) => {
    return (
        <section
            className={`${about ? "aboutSection active" : "aboutSection"}`}
        >
            <Breeding />
            <Location
                color={color}
                locationActive={locationActive}
                setLocationActive={setLocationActive}
            />
            <Training />
        </section>
    );
};

export default About;
