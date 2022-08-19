import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Hex1winner = () => {
    return (
        <section className="large">
            <h2>Congratulations You're A Winner</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>You Can Mint Your Reward NFT</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>*Minting Coming Soon</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/dashboard">
                                    Mint
                                </NavLink>
                        </ul>
                        
                </div>
            </div>
          </section>
  );
}

export default Hex1winner;