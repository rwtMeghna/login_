
import { useState } from "react";


export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [submitted, Setsubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setErr("");
      Setsubmitted(true);
    } else {
      setErr("Inavlid username or password");
      Setsubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {submitted ? (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {err && <p className="err">{err}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
