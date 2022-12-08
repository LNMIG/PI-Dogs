import React from "react";
import { Routes, Route} from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import BreedDetail from "./components/BreedDetail/BreedDetail";
import BreedAction from "./components/BreedAction/BreedAction";
import FormAdding from "./components/FormAdding/FormAdding";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <div>
      <Routes>
        <Route strict path='/' element={ <Landing/> } />
        <Route strict path='/home' element={ <Home/> } />
        <Route strict path='/dogs/:idBreed/:flag' element={ <BreedDetail/> } />
        <Route strict path='/dog' element={ <FormAdding/> } />
        <Route strict path='/dog/delete/:idBreed/:action' element={ <BreedAction/> } />
        <Route path='/*' element={ <Error404/> } />
      </Routes>
    </div>
  );
}

export default App;