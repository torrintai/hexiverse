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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/tokenomics">
                                    Begin Game
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Hexial;