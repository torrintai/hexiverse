import concept from '../assets/gamecon.png';
import theory from '../assets/gametheory.png';
import social from '../assets/gamesocials.png';
import hexial from '../assets/hexialpulsuit.png';
import heximark from '../assets/heximark.png';
import faqs from '../assets/faqs.png';
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <section className="projects">
            <h2>HEXiVerse Social Games</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Game Concept</h3>
                    <img src={concept} alt="Hexiverse game concept" />
                    <p>The SIMS meets Minecraft meets Decentraland meets Pulsechain.
                      <ul><li>Social Pulsechain DeFi Game</li>
                      <li> Mini-Games</li>
                      <li>Start FREE</li>
                      <li>In-Game Swapping</li>

                      </ul>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/concept">
                                    GO
                                </NavLink>
                        </ul>
                </div>

                <div className="projects__card">
                    <h3>Tokenomics</h3>
                    <img src={theory} alt="hexiverse tokenomics" />
                    <p>Ground floor start with ZERO NFTS minted. Low barrier to entry.
                      <ul>
                        <li>Play to Earn</li>
                        <li>Open Market Trading</li>
                        <li>Liquidity Providing</li>
                        <li>Unlock Fee Sharing and Perks</li>

                    </ul>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/tokenomics">
                                    GO
                                </NavLink>
                        </ul>
                </div>

                <div className="projects__card">
                    <h3>Social</h3>
                    <img src={social} alt="hexiverse socials" />
                    <p>Come and participate in taking Social Media to the next level.
                      <ul>
                        <li>Work Together to Grow</li>
                        <li>Trade, Chat, Learn</li>
                        <li>Public and Private Spaces</li>
                        <li>Bridged Social Experiences</li>
                      </ul>
                      
                      
                    </p>

                    <ul className="nav-item">
                                <NavLink className="btn" to="/socials">
                                    GO
                                </NavLink>
                        </ul>
                </div>
                <div className="projects__card">
                    <h3>Mini-Games</h3>
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

                <div className="projects__card">
                    <h3>Market</h3>
                    <img src={heximark} alt="hexiverse tokenomics" />
                    <p>Trade directly with friends, or with other peers or pools in the market.
                      <ul>
                        <li>Easy In-game Swapping</li>
                        <li>Set Bids/ Asks</li>
                        <li>Swap Immediately From Pool</li>
                        <li>Multiple Wallet Integrations</li>

                    </ul>
                    </p>
                    <ul className="nav-item">
                                <NavLink className="btn" to="/market">
                                    GO
                                </NavLink>
                        </ul>
                </div>

                <div className="projects__card">
                    <h3>FAQs</h3>
                    <img src={faqs} alt="hexiverse socials" />
                    <p>Frequently Asked Questions
                      <ul>
                        <li>How can I make money?</li>
                        <li>What wallets can I connect with?</li>
                        <li>Is the project open source code?</li>
                        <li>Can I sell the NFTs on other markets?</li>
                      </ul>
                      
                      
                    </p>

                    <ul className="nav-item">
                                <NavLink className="btn" to="/freqaqs">
                                    GO
                                </NavLink>
                        </ul>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
