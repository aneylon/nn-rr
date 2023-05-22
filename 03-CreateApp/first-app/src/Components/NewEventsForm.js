import "./NewEventsForm.css";
import { useState } from "react";
export const NewEventsForm = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const updateEventTitle = (event) => {
    console.info(event.target.value);
    setEventTitle(event.target.value);
  };
  const updateEventDate = (event) => {
    console.info(event.target.value);
    setEventDate(event.target.value);
  };
  const resetForm = () => {
    setEventDate("");
    setEventTitle("");
  };
  return (
    <div>
      <form className="new-event-form">
        <label htmlFor="event-title">Event Title:</label>
        <input
          id="event-title"
          value={eventTitle}
          onChange={updateEventTitle}
        />
        <label>
          <span>Event Date:</span>
          <input type="date" value={eventDate} onChange={updateEventDate} />
        </label>
        <button>Submit</button>
        <p>
          - {eventDate} - {eventTitle} -
        </p>
        <p onClick={resetForm}>reset</p>
      </form>
    </div>
  );
};
