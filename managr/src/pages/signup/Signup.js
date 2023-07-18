import { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState("");

  const fileChange = (e) => {
    console.log("file!");
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);
    if (!selected) {
      setThumbnailError("please select an image");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("file size must be less than 100kb");
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
    console.log("done");
  };

  const submistSignUp = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
      displayName,
      thumbnail,
    };
    console.log({ data });
  };

  return (
    <form className="auth-form" onSubmit={submistSignUp}>
      <h2>Sign up</h2>
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
      <label>
        <span>display name : </span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>profile thumbnail : </span>
        <input required type="file" onChange={fileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <button className="btn">Sign Up</button>
    </form>
  );
  return <div>Signup</div>;
}
