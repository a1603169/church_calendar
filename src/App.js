import { Route } from "react-router-dom";
// import { useState } from "react";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Homepage />
      </Route>
    </div>
  );
}

export default App;
