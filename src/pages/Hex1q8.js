import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Hex1q8 = () => {
    return (
        <section className="large">
            <h2>HEXial Pulsuit Level 1</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Question 8</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>What number is closest to the average APY HEX pays?</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    15 %
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/hex1q9">
                                    35 %
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    78%
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    10 %
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Hex1q8;