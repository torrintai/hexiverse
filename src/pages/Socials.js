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
                    <p><b>All Things Hexico All-In-One Space</b>
                    <ul><li>Customize your own NFT avatar</li>
                    <li>Create a profile</li>
                    <li>Connect with friends and make new ones</li>
                    <li>Build a channel</li>
                    <li>Build a Pub or a Stadium</li>
                    <li>Create invite only channels or streams</li>
                    <li>Play multiplayer mini-games</li>
                    <li>Work together in the main game</li>
                    <li>Create teams for competitions and events</li>
                    <li>Connect and bridge with existing social platforms</li>
                    </ul>
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

export default Socials;