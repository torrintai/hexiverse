import React from "react";
import faqs from '../assets/faqs.png';
import { NavLink } from "react-router-dom";


const Freqaqs = () => {
    return (
        <section className="large">
            <h2>Frequently Asked Questions</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Conceptual Answers *May Change</h3>
                    <img src={faqs} alt="Hexiverse game concept" />
                    <p><h3>Commonly Asked Questions</h3>
                        <ul>
                            <li>How do users collect NFTs?</li>
                            NFTs will be acquired from playing the mini-games, as well as from harvesting, crafting and trading for them in the main game.
                            <li>How do users take possesion of the NFTs?</li>
                            Afer a user connects their wallet they can mint their NFTs in-game to their wallet.
                            <li>What does it cost to play?</li>
                            The game costs nothing to play, pay only minting and swap fees.
                            <li>What will the Socials section include?</li>
                            Channels Chat, Direct Messages, Video Streams, Forum Chat, Customized Feed, Bridging with other platforms. 
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

export default Freqaqs;