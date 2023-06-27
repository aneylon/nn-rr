import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

export default function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ displayName, email, password });
    signup(email, password, displayName);
  };
  return (
    <form className={styles["signup-form"]} onSubmit={handleLogin}>
      <h2>Signup</h2>
      <label>
        <span>display name:</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
        />
      </label>
      <label>
        <span>email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p className="error">{error}</p>}
    </form>
  );
}
