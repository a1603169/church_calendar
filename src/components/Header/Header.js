import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function active() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.listsContainer}>
          <li>
            <NavLink className={classes.nav_btn} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.nav_btn}
              to="/monthly"
            >
              Monthly
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.nav_btn}
              to="/weekly"
            >
              Weekly
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.nav_btn}
              to="/daily"
            >
              Daily
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default active;
