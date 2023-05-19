import "./App.css";
import Title from "./Components/Title";
import { Events } from "./Components/Events";
import Modal from "./Components/Modal";
import { useState } from "react";
import { NewEventsForm } from "./Components/NewEventsForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAddEvents, setShowAddEvents] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    setShowAddEvents(false);
  };
  return (
    <div className="App">
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
          <NewEventsForm />
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
      <Events />
    </div>
  );
}

export default App;
