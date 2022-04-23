import { useState } from "react";
import MenuListBtn from "../../Ui/Menu/MenuListBtn";
import "./DropDownMenu.css";
import FavoriteMenu from "./FavoriteMenu";
import GenerationMenu from "./GenerationMenu";
import SearchMenu from "./Search_Section/SearchMenu";
import TypesMenu from "../DropDown_Menu/Types_Filter/TypesMenu";

const DropDownMenu = ({
    searchActive,
    setSearchActive,
    typesFilter,
    setTypesFilter,
}) => {
    const [dropActive, setDropActive] = useState(false);

    return (
        <aside
            className={`${
                dropActive ? "dropMenu active md:text-base text-sm" : "dropMenu"
            }`}
        >
            <section>
                <MenuListBtn
                    setDropActive={setDropActive}
                    dropActive={dropActive}
                />
            </section>
            {dropActive ? (
                <article className='menuActive'>
                    <FavoriteMenu />
                    <TypesMenu
                        typesFilter={typesFilter}
                        setTypesFilter={setTypesFilter}
                    />
                    <GenerationMenu />
                    <SearchMenu
                        setDropActive={setDropActive}
                        searchActive={searchActive}
                        setSearchActive={setSearchActive}
                    />
                </article>
            ) : (
                ""
            )}
        </aside>
    );
};

export default DropDownMenu;
