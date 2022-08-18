import React from "react";
import socials from '../assets/gamesocials.png';
import { NavLink } from "react-router-dom";


const Socials = () => {
    return (
        <section className="large">
            <h2>HEXiVerse Socials</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Gather In HEXiVerse - Chat - Stream</h3>
                    <img src={socials} alt="Hexiverse game concept" />
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

export default Socials;