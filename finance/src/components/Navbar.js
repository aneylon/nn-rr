import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useLogout } from "../hooks/useLogout";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">Things</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
