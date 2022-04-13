import React from 'react';
import '../../css/index.css';
import { NavLink } from 'react-router-dom';


function Home() {
    return (
        <div className="Home">
          
          <h1 className="title" >Puppies Lovers</h1>
          <h2 className="question" >Whant to know more about your lovely puppy?</h2>
          <h2 className="question" >Whant to add info about your own puppy?</h2>
          <div className="tryus" >
            <h3> ~  </h3>
                <div className="btn" >
                    <NavLink className="btn-link" exact to="/home" >START</NavLink>
                </div>
            <h3> ~ </h3>
          </div>
        </div>
    );
  }
  
  export default Home;