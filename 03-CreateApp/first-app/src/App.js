import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let name = "dude";
  const [name, setName] = useState("dude");
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "one", id: 1 },
    { title: "two", id: 2 },
    { title: "three", id: 3 },
  ]);
  const changeName = () => {
    // name = "bro";
    setName("bro");
    console.log(name);
  };

  const deleteEvent = (id) => {
    console.log("delete : ", id);
    // possible to be out of sync with event updates.
    // let filtered = events.filter((event) => {
    //   if (event.id !== id) return event;
    // });
    setEvents((previous) => {
      return previous.filter((event) => {
        return event.id !== id;
      });
    });
  };
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={changeName}>Change name</button>
      <div>
        {showEvents && (
          <button onClick={() => setShowEvents(false)}>hide events</button>
        )}
        {!showEvents && (
          <button onClick={() => setShowEvents(true)}>show events</button>
        )}
      </div>
      {showEvents &&
        events.map((item, index) => {
          return (
            <div key={item.id}>
              <h2>
                {index + 1} : {item.title}
              </h2>
              <button
                onClick={() => {
                  deleteEvent(item.id);
                }}
              >
                delete event
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
