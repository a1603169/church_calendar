import Card from "../Card/Card";
import classes from "./ChurchInfo.module.css";

function ChurchInfo({ apiData }) {
  // get a data via props
  if (typeof apiData.celebrations === "object") {
    // I separated data type to get it properly
    const dataObj = apiData.celebrations;
    dataObj.sort((a, b) => {
      return a[2] - b[2];
    });
    // This is to sort the array according to the importance of the celebration rank_num

    return (
      // This is when titles are multiples
      <>
        <Card
          season={apiData.season}
          week={apiData.week}
          title={dataObj}
          weekday={apiData.weekday}
        />
      </>
    );
  } else {
    // This is when title is sent only one time
    return (
      <>
        <Card
          season={apiData.season}
          week={apiData.week}
          title={apiData.celebrations}
          weekday={apiData.weekday}
        />
      </>
    );
  }
}
export default ChurchInfo;
