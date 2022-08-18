// Import Assets
import concept from '../assets/gamecon.png';
import theory from '../assets/gametheory.png';
import social from '../assets/gamesocials.png';
import { NavLink } from "react-router-dom";

const Projects = () => {
    return (
        <section className="projects">
            <h2>Testing Page</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Game Concept</h3>
                    <img src={concept} alt="Hexiverse game concept" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <ul className="nav-item">
                                <NavLink className="btn" to="/socials">
                                    GO
                                </NavLink>
                        </ul>
                </div>
            </div>
        </section>
    );
}

export default Projects;
