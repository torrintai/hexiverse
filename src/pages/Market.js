import React from "react";
import heximark from '../assets/heximark.png';
import { NavLink } from "react-router-dom";


const Market = () => {
    return (
        <section className="large">
            <h2>HEXiVerse Open Trade Market</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Trade Peer To Peer - Join Pools</h3>
                    <img src={heximark} alt="Hexiverse game concept" />
                    <p><b>HEXiMart</b>
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

export default Market;