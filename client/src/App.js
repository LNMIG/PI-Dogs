import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";
import BreedDetail from "./components/BreedDetail/BreedDetail";
import FormAdding from "./components/FormAdding/FormAdding";

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/dogs/:idBreed' component={BreedDetail} />
      <Route exact path='/dog' component={FormAdding} />
    </React.Fragment>
  );
}

export default App;

// import './App.css';
// function App() {
//   return (
//       <div className="App">
//         <h1>Henry Dogs</h1>
//       </div>
//   );
// }