import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./features/users";
import { useState } from "react";
import { PokeExample } from "./features/RTK-Example/PokeExample";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => {
    return state.users.value;
  });
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  return (
    <div className="App">
      <PokeExample />
      <div id="addUser">
        <input
          type="text"
          name=""
          id=""
          placeholder="user name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="username"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log("add it up");
            // let thing = { name, userName };
            // console.log(thing);
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                userName: userName,
              })
            );
          }}
        >
          add user
        </button>
      </div>
      <div id="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.userName}</p>
              <input
                placeholder="new username"
                onChange={(event) => {
                  setNewUserName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUser({
                      id: user.id,
                      name: user.name,
                      userName: newUserName,
                    })
                  );
                }}
              >
                update username
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                delete user
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
