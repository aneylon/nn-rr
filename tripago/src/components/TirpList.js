import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";
export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3700/trips");
  const { data, isPending, error } = useFetch(url);
  // const fetchTrips = useCallback(async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setTrips(json);
  // }, [url]);
  // useEffect(() => {
  //   fetchTrips();
  //   // fetch(url)
  //   //   .then((response) => {
  //   //     if (response.ok) return response.json();
  //   //   })
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //     setTrips(data);
  //   //   })
  //   //   .catch((error) => console.error(error));
  // }, [/*url,*/ fetchTrips]);
  return (
    <div className="trip-list">
      <h1>Tip List</h1>
      {isPending && <div> ... loading ... </div>}
      {error && <div> {error} </div>}
      <ul>
        {/* {trips.map((trip) => { */}
        {data &&
          data.map((trip) => {
            return (
              <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
              </li>
            );
          })}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3700/trips?loc=somewhere")}
        >
          somewhere
        </button>
        <button onClick={() => setUrl("http://localhost:3700/trips")}>
          everywhere
        </button>
      </div>
    </div>
  );
}
