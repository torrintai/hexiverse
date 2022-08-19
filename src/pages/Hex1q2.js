import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Hex1q2 = () => {
    return (
        <section className="large">
            <h2>HEXial Pulsuit Level 1</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Question 2</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>Which staking system has the least counter party risk?</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Solana
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Cardano
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Luna
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/hex1q3">
                                    HEX
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Hex1q2;