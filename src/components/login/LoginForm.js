import { useState } from "react";

export default function LoginForm({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5011/login", {
      method: "POST",
      headers: {
        ContentType: "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((data) => data.json())
      .then((data) => {
        setToken(data.token);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
