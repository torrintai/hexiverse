import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Hexial = () => {
    return (
        <section className="large">
            <h2>HEXial Pulsuit Trivia Game</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>HEX And Pulsechain Trivia Game</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>Recieve an NFT for completion of the game</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/hex1q1">
                                    Begin Game
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Hexial;