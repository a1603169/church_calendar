import classes from "./TodayPara.module.css";
import ChangeDateCalendar from "../ChangeDateCalendar/ChangeDateCalendar";
import { useState } from "react";

function TodayPara() {
  const [toggleButton, setToggleButton] = useState(false);
  function toggleCalendar() {
    setToggleButton(!toggleButton);
  }

  return (
    <section className={classes.section_container}>
      <button onClick={toggleCalendar}>Show Calendar</button>
      <center>{toggleButton && <ChangeDateCalendar />}</center>
    </section>
  );
}

export default TodayPara;
