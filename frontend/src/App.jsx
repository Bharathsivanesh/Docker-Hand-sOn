import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Backend not connected ❌"));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🚀 Docker Practice – Frontend (React)</h1>

      <p>
        This is <b>static text</b> from the React frontend container.
      </p>

      <hr />

      <h3>Message from Backend:</h3>
      <p style={{ color: "green", fontSize: "18px" }}>
        {msg}
      </p>
    </div>
  );
}

export default App;
