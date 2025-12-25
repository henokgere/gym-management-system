import React, { useState } from "react";
import { registerUser } from '../services/authLocal';
import Modal from "../components/Modal";

import './loginPage.css'

const Register = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [memberId, setMemberId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // default role
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, title: "", message: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await registerUser({ email, password, role, name, memberId})
      // Show success modal
      setModal({ show: true, title: "Success", message: `User registered successfully! your memberId is ${user.memberId}` });
      if (onSuccess) onSuccess();
      console.log(onSuccess);

      // Reset form
      setEmail("");
      setMemberId("");
      setName("");
      setPassword("");
      setRole("customer");
    } catch (error) {
      setModal({ show: true, title: "Error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h3 className="login-title">Register New User</h3>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="login-input"
        />

        <input
          type="text"
          placeholder="Member ID"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          required
          className="login-input"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="login-input"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Registering..." : "Register"}
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

export default Register;
