import "./App.css";
import Title from "./Components/Title";
import { Stuff } from "./Components/Stuff";
import Modal from "./Components/Modal";

function App() {
  return (
    <div className="App">
      <Title title="Events" />
      <Modal>
        <h3>TaC</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          fugiat illo eum dolores sunt nisi, qui odit voluptatum quidem sint,
          suscipit fuga, explicabo adipisci voluptates quibusdam ipsa modi
          impedit. Exercitationem!
        </p>
      </Modal>
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code SAVEBUCKS at checkout.</p>
      </Modal> */}
      <Stuff />
    </div>
  );
}

export default App;
