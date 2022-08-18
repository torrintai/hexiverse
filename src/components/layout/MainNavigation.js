import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to='/dashboard' style={{textDecoration:'none', color: 'white'}}>HEXiVerse</Link></div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/dashboard' activeClassName={classes.active}>Dashboard</NavLink> 
          </li>
          <li><NavLink to='/concept' activeClassName={classes.active}>Concept</NavLink> 
          </li>
          <li><NavLink to='/tokenomics' activeClassName={classes.active}>Tokenomics</NavLink> 
          </li>
          <li><NavLink to='/socials' activeClassName={classes.active}>Socials</NavLink> 
          </li>
          <li><NavLink to='/trailmap' activeClassName={classes.active}>Trailmap</NavLink>
           </li>

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
