import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Pokedex from "./Components/Pokedex_Section/Pokedex";
import PokemonDetailsContainer from "./Components/Pokemon_Info/PokemonDetailsContainer";
import Error404 from "./Components/Ui/Error/Error404";
import NoContent from "./Components/Ui/Error/NoContent";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Pokedex' element={<Pokedex />} />
                <Route path='Pokemon'>
                    <Route path=':name' element={<PokemonDetailsContainer />} />
                </Route>
                <Route path='Moves' element={<NoContent />} />
                <Route path='Abilities' element={<NoContent />} />
                <Route path='Berries' element={<NoContent />} />
                <Route path='Location' element={<NoContent />} />
                <Route path='Type_Charts' element={<NoContent />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
