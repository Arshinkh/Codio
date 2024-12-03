import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LandingPage from "./components/jsx/LandingPage";
import LoginPage from "./components/jsx/Login";
import RegisterPage from "./components/jsx/Register";
import HomePage from "./components/jsx/Home";
import Problems from "./components/jsx/Problems";
import WorkSpace from "./components/jsx/Workspace";

const GOOGLE_CLIENT_ID = "183290254913-7rot59f3njkjqqk5i9rb1ff0rk29npei.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/problems/:topic" element={<Problems />} />
          <Route path="/workspace/:problemId" element={<WorkSpace />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
