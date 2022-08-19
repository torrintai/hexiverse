import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Hex1q4 = () => {
    return (
        <section className="large">
            <h2>HEXial Pulsuit Level 1</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Question 4</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>What is the maximum number of days HEX can be staked?</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    555
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/hex1winner">
                                    5555
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    1500
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    5000
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Hex1q4;