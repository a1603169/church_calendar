import classes from "./Card.module.css";
function Card({ season, week, title, weekday }) {
  let schedules = [];
  if (weekday === "monday") {
    schedules = ["07:00 ~ 08:00", "10:00 ~ 11:00", "18:00 ~ 19:00"];
  } else if (
    weekday === "tuesday" ||
    weekday === "wednesday" ||
    weekday === "thursday" ||
    weekday === "friday" ||
    weekday === "saturday"
  ) {
    schedules = [
      "07:00 ~ 08:00",
      "10:00 ~ 11:00",
      "18:00 ~ 19:00",
      "19:00 ~ 20:00",
    ];
  } else if (weekday === "sunday")
    schedules = [
      "07:00 ~ 08:00",
      "09:00 ~ 10:00",
      "10:00 ~ 11:00",
      "11:00 ~ 12:00",
      "12:00 ~ 13:00",
      "14:00 ~ 15:00",
      "17:00 ~ 18:00",
      "18:00 ~ 19:00",
      "19:00 ~ 20:00",
    ];

  if (typeof title === "object") {
    return (
      <div className={classes.card_container}>
        <div className={classes.card_content}>
          <p className={classes.card_description}>
            <span className={classes.card_description_highlighted}>
              Contact Us
            </span>
          </p>
        </div>
        {/*Update features! Show multiple images slides according to the season api value*/}
        <div className={classes.card_content}>
          {title.map((arr) => {
            return <marquee className={classes.card_title}>{arr[0]}</marquee>;
          })}
          <br />
          <p className={classes.card_description}>
            <span className={classes.card_description_highlighted}>
              {season}
            </span>
          </p>
          <p className={classes.card_description_week}>week {week}</p>
        </div>
        <div className={classes.card_schedule_content}>
          <h3 className={classes.card_schedule_title}>
            <span className={classes.card_description_highlighted}>
              Myungdong
            </span>
          </h3>
          <ul className={classes.card_schedule_lists}>
            {schedules.map((daily) => {
              return (
                <li className={classes.card_schedule_list} key={daily}>
                  {daily}
                </li>
              );
            })}
          </ul>
          <p className={classes.card_schedule_highlighted}>{weekday}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.card_container}>
        <div className={classes.card_content}>
          <p className={classes.card_description}>
            <span className={classes.card_description_highlighted}>
              Contact Us
            </span>
          </p>
        </div>

        <div className={classes.card_content}>
          <marquee className={classes.card_title}>{title}</marquee>
          <p className={classes.card_description}>
            <span className={classes.card_description_highlighted}>
              {season}
            </span>
          </p>
          <p className={classes.card_description_week}>week {week}</p>
        </div>
        <div className={classes.card_schedule_content}>
          <h3 className={classes.card_schedule_title}>
            <span className={classes.card_description_highlighted}>
              Myungdong
            </span>
          </h3>
          <ul className={classes.card_schedule_lists}>
            {schedules.map((daily) => {
              return (
                <li className={classes.card_schedule_list} key={daily}>
                  {daily}
                </li>
              );
            })}
          </ul>
          <p className={classes.card_schedule_highlighted}>{weekday}</p>
        </div>
      </div>
    );
  }
}

export default Card;
