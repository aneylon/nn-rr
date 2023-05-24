import "./NewEventsForm.css";
import { useState, useRef } from "react";
export const NewEventsForm = ({ addEvent }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("somewhere");
  const refTitle = useRef();
  const refDate = useRef();
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
    setLocation("");

    // refTitle.current.value = "";
    // refDate.current.value = "";
  };
  const handleSubmit = (event) => {
    console.log({ refTitle, refDate });
    // let refEvent = {
    //   title: refTitle.current.value,
    //   date: refDate.current.value,
    //   id: Math.floor(Math.random() * 10000),
    // };
    // console.log("submit!", { event });
    event.preventDefault();
    const newEvent = {
      title: eventTitle,
      date: eventDate,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };
    console.log(newEvent);
    addEvent(newEvent);
    // addEvent(refEvent);
    resetForm();
  };
  return (
    <div>
      <form className="new-event-form" onSubmit={handleSubmit}>
        <label htmlFor="event-title">Event Title:</label>
        <input
          id="event-title"
          value={eventTitle}
          onChange={updateEventTitle}
          ref={refTitle}
        />
        <label>
          <span>Event Date:</span>
          <input
            type="date"
            value={eventDate}
            onChange={updateEventDate}
            ref={refDate}
          />
        </label>
        <label>
          <span>Event location:</span>
          <select
            onChange={(event) => {
              let selected = event.target.value;
              console.log(selected);
              setLocation(selected);
            }}
            value={location}
          >
            <option value="here">here</option>
            <option value="there">there</option>
            <option value="everywhere">everywhere</option>
            <option value="somewhere">somewhere</option>
            <option value="nowhere">nowhere</option>
          </select>
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
