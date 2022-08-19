import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Hex1q3 = () => {
    return (
        <section className="large">
            <h2>HEXial Pulsuit Level 1</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Question 3</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>What is the maximum yearly inflation rate of HEX?</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    38 %
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/hex1q4">
                                    3.69 %
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    19 %
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    5.5 %
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Hex1q3;