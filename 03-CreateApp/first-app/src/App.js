import "./App.css";
import Title from "./Components/Title";
// import { Events } from "./Components/Events";
import Modal from "./Components/Modal";
import { useState } from "react";
import { NewEventsForm } from "./Components/NewEventsForm";
import { EventList } from "./Components/EventList";
import TerminalTest from "./Components/TerminalTest";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAddEvents, setShowAddEvents] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    setShowAddEvents(false);
  };
  const addEvent = (eventToAdd) => {
    console.log("add event", eventToAdd);
    setEvents((existing) => {
      return [...existing, eventToAdd];
    });
    setShowAddEvents(false);
  };
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
      <TerminalTest />

      <Title title="Events" />
      <div>
        <button
          onClick={() => {
            setShowAddEvents(true);
          }}
        >
          Add event
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          show modal
        </button>
      </div>
      {showAddEvents && (
        <Modal handleClose={handleClose}>
          <NewEventsForm addEvent={addEvent} />
        </Modal>
      )}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h3>TaC</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis fugiat illo eum dolores sunt nisi, qui odit voluptatum
            quidem sint, suscipit fuga, explicabo adipisci voluptates quibusdam
            ipsa modi impedit. Exercitationem!
          </p>
        </Modal>
      )}
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code SAVEBUCKS at checkout.</p>
      </Modal> */}
      {/* <Events /> */}

      {/* <h1>My name is {name}</h1>
      <button onClick={changeName}>Change name</button> */}
      <div>
        {showEvents && (
          <button onClick={() => setShowEvents(false)}>hide events</button>
        )}
        {!showEvents && (
          <button onClick={() => setShowEvents(true)}>show events</button>
        )}
      </div>
      {showEvents && <EventList events={events} deleteEvent={deleteEvent} />}
    </div>
  );
}

export default App;
