import React from "react";
import theory from '../assets/gametheory.png';


function Tokenomics() {
  return (
    <div className="tokenomics">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={theory}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Hexiverse Tokenomics</h1>
            <p>
              <li><h3>Overview:</h3></li>
              Start for free and collect NFTs for the *cost of minting.
              <li><h3>Mission:</h3></li>
              Trade NFTs on an in-game open marketplace. 
              <li><h3>NFts</h3>
              <li><b>Game Items</b></li> Based 
              <li><b>Unique</b></li> Perks and Rewards
              Use capital from V1 to fund community inspired game expansion. Major social interactive spaces enabled.
              <li><b>Liquidity Providing</b></li> Last 
              </li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;