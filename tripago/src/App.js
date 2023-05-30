import { useState } from "react";
import "./App.css";
import TripList from "./components/TirpList";

function App() {
  const [showTrips, setShowTrips] = useState(true);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowTrips(!showTrips);
        }}
      >
        Show Trips
      </button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
