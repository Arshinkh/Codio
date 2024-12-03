import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";
import ai from "../../assests/img/ai.png";
import app from "../../assests/img/app.png";
import c from "../../assests/img/c++.png";
import dl from "../../assests/img/dl.png";
import ml from "../../assests/img/ml.png";
import py from "../../assests/img/py.png";
import web from "../../assests/img/web.png";
import jv from "../../assests/img/java.png";
import Header from './MainHeader';

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      fetch("http://localhost:5000/home", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            navigate("/login");
            return;
          }
          return res.json();
        })
        .then((data) => {
          if (data && data.user) {
            setUser(data.user);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          navigate("/login");
        });
    }
  }, [navigate]);

  const handleCardClick = (topic) => {
    navigate(`/problems/${topic}`);
  };

  return (
    <div>
      {/* Pass user data to the Header component */}
      <Header user={user} />

      <div className="home-options-container">
        <div className="option-card" onClick={() => handleCardClick("ai")}>
          <div className="ti-container">
            <div className="icon">
              <img className="ai-icon" src={ai} alt="AI Icon" />
            </div>
            <div className="title">Artificial Intelligence</div>
          </div>
          <div className="description">
            Build intelligent systems with AI for tasks like NLP and computer
            vision.
          </div>
        </div>

        <div className="option-card" onClick={() => handleCardClick("ml")}>
          <div className="ti-container">
            <div className="icon">
              <img className="ai-icon" src={ml} alt="AI Icon" />
            </div>
            <div className="title">Machine Learning</div>
          </div>
          <div className="description">
            Learn to create predictive models and implement key ML algorithms
          </div>
        </div>

        <div className="option-card" onClick={() => handleCardClick("dl")}>
          <div className="ti-container">
            <div className="icon">
              <img className="ai-icon" src={dl} alt="AI Icon" />
            </div>
            <div className="title">Deep Learning</div>
          </div>
          <div className="description">
            Master neural networks for image recognition, NLP, and generative
            tasks.
          </div>
        </div>

        <div className="option-card" onClick={() => handleCardClick("web")}>
          <div className="ti-container">
            <div className="icon">
              <img className="ai-icon" src={web} alt="AI Icon" />
            </div>
            <div className="title">Websites</div>
          </div>
          <div className="description">
            Design and build responsive websites with HTML, CSS, JavaScript, and
            frameworks like React.
          </div>
        </div>

        <div className="option-card" onClick={() => handleCardClick("py")}>
          <div className="ti-container">
            <div className="icon">
              <img className="ai-icon" src={py} alt="AI Icon" />
            </div>
            <div className="title">Python</div>
          </div>
          <div className="description">
            Unlock the power of Python for automation, data science, AI, web
            development, and more.
          </div>
        </div>

        <div className="option-card" onClick={() => handleCardClick("java")}>
          <div className="ti-container">
            <div className="icon">
              <img className="ai-icon" src={jv} alt="AI Icon" />
            </div>
            <div className="title">Java</div>
          </div>
          <div className="description">
            Develop secure and scalable apps with Java for web and Android.
          </div>
        </div>

        <div className="option-card" onClick={() => handleCardClick("c++")}>
          <div className="ti-container">
            <div className="icon">
              <img className="ai-icon" src={c} alt="AI Icon" />
            </div>
            <div className="title">C++</div>
          </div>
          <div className="description">
            Master C++ for system programming, game development, and algorithms.
          </div>
        </div>

        <div className="option-card" onClick={() => handleCardClick("appDev")}>
          <div className="ti-container">
            <div className="icon">
              <img className="ai-icon" src={app} alt="AI Icon" />
            </div>
            <div className="title">Application</div>
          </div>
          <div className="description">
            Create cross-platform apps using tools like Flutter and React
            Native.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
