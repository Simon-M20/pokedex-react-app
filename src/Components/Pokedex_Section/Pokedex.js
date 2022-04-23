import { useState } from "react";
import Header from "./Header/Header";
import "./Pokedex.css";
import Background from "../../Assets/pokeball.jpg";
import PokedexContainer from "./Pokémon_List/PokedexContainer";
import GenerationSection from "./Generations/GenerationSection";
import DropDownMenu from "./DropDown_Menu/DropDownMenu";
import SearchForm from "./DropDown_Menu/Search_Section/SearchForm";
import TypesFilter from "./DropDown_Menu/Types_Filter/TypesFilter";

const Pokedex = () => {
    const [searchForGeneration, setSearchForGeneration] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [typesFilter, setTypesFilter] = useState(false);

    return (
        <section className='pokedex relative'>
            <img className='pokeBg' src={Background} alt='Pokeball bg' />
            <Header
                setSearchForGeneration={setSearchForGeneration}
                searchForGeneration={searchForGeneration}
            />
            <DropDownMenu
                searchActive={searchActive}
                setSearchActive={setSearchActive}
                typesFilter={typesFilter}
                setTypesFilter={setTypesFilter}
            />
            <PokedexContainer />
            {searchForGeneration && (
                <GenerationSection searchForGeneration={searchForGeneration} />
            )}
            {searchActive && (
                <SearchForm
                    setSearchActive={setSearchActive}
                    searchActive={searchActive}
                />
            )}
            {typesFilter && (
                <TypesFilter
                    typesFilter={typesFilter}
                    setTypesFilter={setTypesFilter}
                />
            )}
        </section>
    );
};

export default Pokedex;
