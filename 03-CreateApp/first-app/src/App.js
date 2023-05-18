import "./App.css";
import Title from "./Components/Title";
import { Events } from "./Components/Events";
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <Title title="Events" />
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        show modal
      </button>
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
