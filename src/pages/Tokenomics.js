import React from "react";
import theory from '../assets/gametheory.png';
import { NavLink } from "react-router-dom";


const Tokenomics = () => {
    return (
        <section className="large">
            <h2>HEXiVerse Tokenomics</h2>

            <div className="large__cards">

                <div className="large__card">
                    <h3>Start FREE - Mint NFTS - Open Market Trade</h3>
                    <img src={theory} alt="Hexiverse game concept" />
                    <p>
                        <h2>Key Points:</h2>
                        <ul>
                            <li>ZERO Supply Start</li>
                            <li>Start FREE - Low Barrier To Entry</li>
                            <li>Uses Pulsechain for Game Fees </li>
                            <li>Open In-Game Trade Market With Liquidity Pools</li>
                            <ul><li>*'Only in game NFTs and PLS will be traded initally'</li></ul>
                            <li>Unique NFTS With Specialty Utility Including Fee Sharing</li>
                            <ul><li>*'NFTs will be tradeable with off-game markets'</li></ul>
                            <li>Price Discovery Will Be Market Determined</li>
                            <li>Immutable Contracts Without Admin Keys</li>
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

export default Tokenomics;