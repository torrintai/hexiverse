import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import hexilogo from '../layout/smlogo.png';


const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        
        <Link to='/dashboard'><img src={hexilogo} alt="Hexiverse logo" />
        </Link></div>
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

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;