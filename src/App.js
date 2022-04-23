import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path="Pokedex" element={<Pokedex />} />
        <Route path="Pokemon">
          <Route path=":name" element={<PokemonDetailsContainer />} />
        </Route>
        <Route path="Moves" element={<NoContent />} />
        <Route path="Abilities" element={<NoContent />} />
        <Route path="Berries" element={<NoContent />} />
        <Route path="Location" element={<NoContent />} />
        <Route path="Type_Charts" element={<NoContent />} />
        <Route path="*" element={<Error404 />} /> */}
            </Routes>
        </HashRouter>
    );
}

export default App;
