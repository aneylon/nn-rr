import "./Login.css";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();
  const submitLogin = (e) => {
    e.preventDefault();
    console.log("log it in", email, password);
    login(email, password);
  };
  return (
    <form className="auth-form" onSubmit={submitLogin}>
      <h2>Login</h2>
      <label>
        <span>email : </span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password : </span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Log In</button>}
      {isPending && (
        <button className="btn" disabled>
          Logging in...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
