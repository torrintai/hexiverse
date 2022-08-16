import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to='/home' style={{textDecoration:'none', color: 'white'}}>HEX Verse</Link></div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/dashboard' activeClassName={classes.active}>Dashboard</NavLink> 
          </li>
          <li><NavLink to='/new-quote' activeClassName={classes.active}>Add Quotes</NavLink> 
          </li>
          <li><NavLink to='/trailmap' activeClassName={classes.active}>Trailmap</NavLink> </li>

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
