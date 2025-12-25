import React, { useState } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AuthLayout({ onSuccess }) {
  const [mode, setMode] = useState("login");

  return (
    <div className="auth-layout">
      {/* Updated Toggle to match Navbar structure */}
      <nav className="auth-toggle">
        <div className="navbar-inner"> 
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
        </div>
      </nav>

      <div className="auth-content">
        {mode === "login" && <Login onSuccess={onSuccess} />}
        {mode === "register" && <Register onSuccess={onSuccess} />}
      </div>
    </div>
  );
}