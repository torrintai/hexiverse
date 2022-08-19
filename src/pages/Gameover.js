import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Gameover = () => {
    return (
        <section className="large">
            <h2>Game Over</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Please Try Again</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>Better Luck Next Time</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/hexial">
                                    Begin Game
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Gameover;