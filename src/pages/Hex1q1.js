import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Hex1q1 = () => {
    return (
        <section className="large">
            <h2>HEXial Pulsuit Level 1</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Question 1</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>Who is the founder of HEX?</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Bruce Li
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Cap'n RG3
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/hex1q2">
                                    Richard Heart
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    CZ
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Hex1q1;