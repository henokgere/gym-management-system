import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

import './loginPage.css';

const Login = ({ onSuccess }) => {
  const [identifier, setIdentifier] = useState(""); // email or memberId
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let email = identifier;

      // If identifier is not an email, try to find it as memberId in Firestore
      if (!/\S+@\S+\.\S+/.test(identifier)) {
        const q = query(
          collection(db, "users"),
          where("memberId", "==", identifier)
        );
        const snapshot = await getDocs(q);
        if (snapshot.empty) {
          throw new Error("Member ID not found");
        }
        const userData = snapshot.docs[0].data();
        email = userData.email;
      }

      // Sign in with Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);

      // Callback on success
      if (onSuccess) onSuccess();
    } catch (error) {
      alert(error.message);
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
    </div>
  );
};

export default Login;
