import React, { useState } from "react";
import { loginUser } from "../services/authLocal";
import { collection, query, where, getDocs } from "firebase/firestore";
import Modal from "../components/Modal";
import './loginPage.css'
const Login = ({ onSuccess }) => {
  const [identifier, setIdentifier] = useState(""); // email or memberId
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, title: "", message: "" });
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let email = identifier;
      const users = JSON.parse(localStorage.getItem("users")) || {};

      // If identifier is not an email, try to find it as memberId in localStorage
      if (!/\S+@\S+\.\S+/.test(identifier)) {
        const userByMemberId = Object.values(users).find(
          (u) => u.memberId === identifier
        );
        if (!userByMemberId) {
          throw new Error("Member ID not found");
        }
        email = userByMemberId.email;
      }

      // Find user by email
      const user = users[email];
      if (!user) {
        throw new Error("User not found");
      }

      // Check password
      if (user.password !== password) {
        throw new Error("Invalid password");
      }

      // Set current user session
      localStorage.setItem("currentUser", JSON.stringify(user));

      // Success modal
      setModal({
        show: true,
        title: "Success",
        message: "Logged in successfully!",
      });

      if (onSuccess) onSuccess();
    } catch (error) {
      setModal({ show: true, title: "Error", message: error.message });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h3 className="login-title">Welcome Back</h3>

        <input
          type="text"
          placeholder="Email or Member ID"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Modal */}
      <Modal
        show={modal.show}
        onClose={() => setModal({ ...modal, show: false })}
        title={modal.title}
        message={modal.message}
      />
    </div>
  );
};

export default Login;
