import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function GoogleAuth({ isRegister }) {
  const navigate = useNavigate();
  const backendUrl =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const handleSuccess = async (response) => {
    const endpoint = isRegister ? "/auth/register" : "/auth/login";

    try {
      const res = await fetch(`${backendUrl}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential }),
      });

      const data = await res.json();
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during Google authentication:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  const handleError = () => {
    alert("Google login failed. Please try again.");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      shape="pill"
      useOneTap
    />
  );
}

export default GoogleAuth;
