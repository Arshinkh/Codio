import React, { useState } from "react";
import "../css/Login.css";
import Header from "./Header";
import GoogleAuth from "./GoogleAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Manual login functionality coming soon!");
  };

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="inner-container">
          <p className="header-text">Login</p>
          <form onSubmit={handleSubmit}>
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
            <p className="forgot-pass" onClick={() => alert("Feature coming soon!")}>
              Forgot Password?
            </p>
            <div className="button" onClick={handleSubmit}>
              <button type="submit">Sign in</button>
            </div>
            <p className="continue-text">or continue with</p>
            <div className="external-links">
              <GoogleAuth isRegister={false} />
            </div>
            <p className="register-text">
              Don't have an account yet?{" "}
              <span className="register-link" onClick={() => navigate("/register")}>
                Register for free
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
