import React from "react";
import concept from '../assets/gamecon.png';
import { NavLink } from "react-router-dom";


const Concept = () => {
    return (
        <section className="large">
            <h2>HEXiVerse Concept</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>PLAY - EARN - SOCIALIZE - SWAP</h3>
                    <img src={concept} alt="Hexiverse game concept" />
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

export default Concept;