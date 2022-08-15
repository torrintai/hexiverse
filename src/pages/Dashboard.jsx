import React from "react";
import homelogo from '../assets/verse.png';


function Home() {
  return (

    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={homelogo}
              alt="Torrin Hexico Hexverse"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">HEXverse</h1>
            <p>
             Enjoy Hexico together in the new Hexverse V1a. Coming soon! This Hexico portal will bring 
             a whole new level of interaction and connection. Farm, build, swap AND share some time together.
             <ul>
              <li>Social Platform</li>
              <li>Play to Earn</li>
              <li>Tools</li>
             </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Home;
