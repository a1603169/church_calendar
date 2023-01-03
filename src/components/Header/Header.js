import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

function active() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.listsContainer}></ul>
        <ul className={classes.listsContainer}>
          <li>
            <NavLink className={classes.nav_btn} to="/">
              CHURCH CALENDAR
            </NavLink>
          </li>
          <li>
            <a
              className={classes.nav_btn}
              href="https://github.com/a1603169/church_calendar"
              target="_BLANK"
            >
              GITHUB
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default active;
