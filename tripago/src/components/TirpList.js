import { useEffect, useState } from "react";
export default function TripList() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    getTripList();
  }, []);
  function getTripList() {
    return fetch("http://localhost:3700/trips")
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        console.log(data);
        setTrips(data);
      })
      .catch((error) => console.error);
  }
  return (
    <div>
      <h1>Tip List</h1>
      <p>{trips.length}</p>
    </div>
  );
}
