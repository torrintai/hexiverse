import React from "react";
import concept from '../assets/gamecon.png';
import hexial from '../assets/hexialpulsuit.png';
import { NavLink } from "react-router-dom";


const Concept = () => {
    return (
        <section className="large">
            <h2>HEXiVerse Concept</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>PLAY - EARN - SOCIALIZE - SWAP</h3>
                    <img src={concept} alt="Hexiverse game concept" />
                    <p>Play to earn collectible and tradeable NFTs.
                    <ul>
                        <li>Social channels available without collecting or swapping</li>
                        <li>Play the main game, mini-games, or just chat and/or swap</li>
                        <li>Harvest in-game resources and items NFTs</li>
                        <li>Combine NFTs to craft more useful NFTs</li>
                        <li>Trade NFTs in-game for PLS</li>
                        <li>Earn and recieve Unique NFTs with extra perks:</li>
                        <b>Some Unique NFT's Perks</b>
                        <ul><li>Fee Sharing</li>
                        <li>Social Memberships</li>
                        <li>Future Airdrop Qualifications</li>
                        <li>Special Events Admission</li>
                        <li>Flexing and Status</li>
                        </ul>
                        <li>Customizable NFT Avatar for the cost of minting after connecting</li>
                        <li>Plays for everyone, from grandma to gamer, whale to no-coiner</li>
                        <li>Many options for earning with low risk</li>
                    </ul>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/hexial">
                                    Begin Game
                                </NavLink>
                        </ul>
                </div>
                <div className="projects__card">
                    <h3>Game Concept</h3>
                    <img src={hexial} alt="Hexiverse game concept" />
                    <p>HEXial Pulsuit - The HEX And Pulsechain Trivia Game
                      <ul><li>Earn NFTs for Participating</li>
                      <li>Only Pay Minting Fees</li>
                      <li>Short, Fun and Rewarding</li>
                      <li>In-Game Swapping</li>

                      </ul>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/hexial">
                                    GO
                                </NavLink>
                        </ul>
                </div>
            </div>
          </section>
  );
}

export default Concept;