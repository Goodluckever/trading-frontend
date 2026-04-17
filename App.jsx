import React, { useState } from "react";

export default function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API = "trading-backend-production-b258.up.railway.app";

  const login = async () => {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setToken(data.token);
  };

  return (
    <div>
      {!token ? (
        <>
          <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <button onClick={login}>Login</button>
        </>
      ) : (
        <h1>Logged in</h1>
      )}
    </div>
  );
}
