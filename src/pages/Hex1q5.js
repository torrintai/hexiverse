import React from "react";
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Hex1q5 = () => {
    return (
        <section className="large">
            <h2>HEXial Pulsuit Level 1</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Question 5</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p><b>Who is not a HEX or Pulse related YouTube streamer?</b>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Mati Allin
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Crypto Coffee
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/gameover">
                                    Crypto Heartbeat
                                </NavLink>
                        </ul>
                        <ul className="nav-item">
                                <NavLink className="btn" to="/hex1q6">
                                    HexIdaho
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Hex1q5;