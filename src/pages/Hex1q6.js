import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Hex1q6 = () => {
    return (
        <section className="large">
            <h2>HEXial Pulsuit Level 1</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Question 6</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>HEX is the first blockchain what?</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/hex1q7">
                                    Certificate of Deposit
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Endowment
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Crypto Trust
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    DeFi
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Hex1q6;