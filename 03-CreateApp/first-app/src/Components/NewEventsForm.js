import "./NewEventsForm.css";

export const NewEventsForm = () => {
  return (
    <div>
      <form className="new-event-form">
        <label htmlFor="event-title">Event Title:</label>
        <input id="event-title" />
        <label>
          <span>Event Date:</span>
          <input type="date" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
