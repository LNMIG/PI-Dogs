import React from "react";
import { Route, Switch} from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import BreedDetail from "./components/BreedDetail/BreedDetail";
import BreedAction from "./components/BreedAction/BreedAction";
import FormAdding from "./components/FormAdding/FormAdding";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <div>
      <Switch>
        <Route strict exact path='/' component={Landing} />
        <Route strict exact path='/home' component={Home} />
        <Route strict exact path='/dogs/:idBreed' component={BreedDetail} />
        <Route strict exact path='/dog' component={FormAdding} />
        <Route strict exact path='/dog/delete/:idBreed/:action' component={BreedAction} />
        <Route path='/*' component={Error404} />
      </Switch>
    </div>
  );
}

export default App;