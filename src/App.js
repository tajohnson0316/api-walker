import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import People from "./components/People";
import Films from "./components/Films";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import Species from "./components/Species";
import Planets from "./components/Planets";
import NotFound from "./components/NotFound";

function App() {
  return (
    <fieldset className="container p-5">
      <Routes>
        <Route path="/" element={<Form filter="default" />}></Route>
        <Route
          path="/people/:personID"
          element={<People filter="people" />}
        ></Route>
        <Route path="/films/:filmID" element={<Films filter="films" />}></Route>
        <Route
          path="/starships/:shipID"
          element={<Starships filter="starships" />}
        ></Route>
        <Route
          path="/vehicles/:vehicleID"
          element={<Vehicles filter="vehicles" />}
        ></Route>
        <Route
          path="/species/:speciesID"
          element={<Species filter="species" />}
        ></Route>
        <Route
          path="/planets/:planetID"
          element={<Planets filter="planets" />}
        ></Route>
        <Route path="/notfound/droids" element={<NotFound />}></Route>
        <Route
          path="*"
          element={<p>These are not the droids you are looking for...</p>}
        />
      </Routes>
    </fieldset>
  );
}

export default App;
