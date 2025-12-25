import React, { useState } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AuthLayout({ onSuccess }) {
  const [mode, setMode] = useState("login"); // "login" or "register"

  return (
    <div className="auth-layout">
      <nav className="auth-toggle">
        <button
          className={mode === "login" ? "active" : ""}
          onClick={() => setMode("login")}
        >
          Login
        </button>
        <button
          className={mode === "register" ? "active" : ""}
          onClick={() => setMode("register")}
        >
          Register
        </button>
      </nav>

      <div className="auth-content">
        {mode === "login" && <Login onSuccess={onSuccess} />}
        {mode === "register" && <Register onSuccess={onSuccess} />}
      </div>
    </div>
  );
}
