import React, { useState } from "react";
import "../css/Register.css";
import Header from "./Header";
import GoogleAuth from "./GoogleAuth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration functionality coming soon!");
  };

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="inner-container">
          <p className="header-text">Register</p>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <p className="input-label">Name</p>
              <input
                type="text"
                className="user-input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <p className="input-label">Email</p>
              <input
                type="email"
                className="user-input"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <p className="input-label">Password</p>
              <input
                type="password"
                className="user-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button">
              <button type="submit">Sign up</button>
            </div>
          </form>
          <p className="continue-text">or continue with</p>
          <div className="external-links">
            <GoogleAuth isRegister={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
