import React from "react";
import { Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import BreedDetail from "./components/BreedDetail/BreedDetail";
import FormAdding from "./components/FormAdding/FormAdding";

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/dogs/:idBreed' component={BreedDetail} />
      <Route exact path='/dog' component={FormAdding} />
    </React.Fragment>
  );
}

export default App;