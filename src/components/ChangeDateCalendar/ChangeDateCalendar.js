import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./ChangeDateCalendar.module.css";
import axios from "axios";
import moment from "moment";
import ChurchInfo from "../ChurchInfo/ChurchInfo";
// import { corsAnywhere } from "cors-anywhere";

// const cors = corsAnywhere.create();

function ChangeDateCalendar() {
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState([]);

  const defaultURL =
    "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/";
  // get the URL s

  const toAddURL = moment(value.toISOString())
    .format()
    .slice(0, 10)
    .toUpperCase()
    .replaceAll("-", "/");

  // useEffect(() => {
  //   cors.get(defaultURL + toAddURL).then((res) => {
  //     const resInfo = res.data;
  //     if (res.data.celebrations.length > 1) {
  //       setData({
  //         season: resInfo.season,
  //         week: resInfo.season_week,
  //         celebrations: [
  //           ...resInfo.celebrations.map((title) => [
  //             title.title,
  //             title.rank,
  //             title.rank_num,
  //           ]),
  //         ],
  //         weekday: resInfo.weekday,
  //       });
  //     } else {
  //       setData({
  //         season: resInfo.season,
  //         week: resInfo.season_week,
  //         celebrations: resInfo.celebrations[0].title,
  //         weekday: resInfo.weekday,
  //       });
  //     }
  //   });
  // }, [value]);

  // This is to become more specified to the api url to get the specific date's information, it will be added.
  // moment library to fix ISO date - 1 issue

  useEffect(() => {
    axios.get(defaultURL + toAddURL).then((res) => {
      const resInfo = res.data;
      if (res.data.celebrations.length > 1) {
        setData({
          season: resInfo.season,
          week: resInfo.season_week,
          celebrations: [
            ...resInfo.celebrations.map((title) => [
              title.title,
              title.rank,
              title.rank_num,
            ]),
          ],
          weekday: resInfo.weekday,
        });
      } else {
        setData({
          season: resInfo.season,
          week: resInfo.season_week,
          celebrations: resInfo.celebrations[0].title,
          weekday: resInfo.weekday,
        });
      }
    });
  }, [value]);
  // Otherwise infinite rendering by setDate
  // This is disabled because of the CORS issue

  return (
    <>
      <div className={classes.calendar_container}>
        <Calendar
          className={classes.react_calendar_outline}
          onChange={onChange}
          value={value}
        />
      </div>
      <ChurchInfo apiData={data} />
    </>
  );
}

export default ChangeDateCalendar;
