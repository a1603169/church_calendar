import MonthlyCalendarPage from "./pages/MonthlyCalendarPage";
import WeeklyCalendarPage from "./pages/WeeklyCalendarPage";
import DailyCalendarPage from "./pages/DailyCalendarPage";
import { Route } from "react-router-dom";
// import { useState } from "react";
import Homepage from "./pages/Homepage";

function App() {
  // const [monthly, setMonthly] = useState(true);
  // const [weekly, setWeekly] = useState(false);
  // const [daily, setDaily] = useState(false);

  return (
    <div>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/monthly">
        <MonthlyCalendarPage />
      </Route>
      <Route path="/weekly">
        <WeeklyCalendarPage />
      </Route>
      <Route path="/daily">
        <DailyCalendarPage />
      </Route>
    </div>
  );
}

export default App;
