import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";
import Header from "./MainHeader";
import "../css/MainHeader.css";
import { useParams } from "react-router-dom";
import "../css/problems.css";

function Problems() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { topic } = useParams();

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

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/problems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching problems:", error);
      });
  }, []);

  const renderContent = () => {
    switch (topic) {
      case "ai":
        return <h1>ARTIFICIAL INTELLIGENCE PROBLEMS</h1>;
      case "ml":
        return <h1>MACHINE LEARNING PROBLEMS</h1>;
      case "py":
        return <h1>PYTHON PROBLEMS</h1>;
      case "web":
        return <h1>WEB DEVELOPMENT PROBLEMS</h1>;
      case "dl":
        return <h1>DEEP LEARNING PROBLEMS</h1>;
      case "c++":
        return <h1>C++ PROBLEMS</h1>;
      case "appDev":
        return <h1>APPLICATION PROBLEMS</h1>;
      case "java":
        return <h1>JAVA PROBLEMS</h1>;
      default:
        return <h1>No problems available for this topic.</h1>;
    }
  };

  const handleProblemClick = (problemId) => {
    navigate(`/workspace/${problemId}`);
  };

  return (
    <div>
      <Header user={user} />
      <div className="problems-header">
        {renderContent()}
      </div>

      <div className="problems-table">
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Difficulty</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} onClick={() => handleProblemClick(item._id)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.difficulty}</td>
                <td>{item.category}</td>
                <td>{item.solved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Problems;
