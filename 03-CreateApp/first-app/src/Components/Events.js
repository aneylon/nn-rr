import React, { useState } from "react";
import { EventList } from "./EventList";
export const Events = () => {
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
    <>
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
      {showEvents && <EventList events={events} deleteEvent={deleteEvent} />}
    </>
  );
};
