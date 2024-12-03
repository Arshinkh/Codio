import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/WorkSpace.css";
import Header from "./MainHeader";
import "../css/MainHeader.css";
import Split from "react-split";
import PlayGround from "./PlayGround";
import { Scrollbars } from "react-custom-scrollbars-2";

const ProblemDescription = () => {
  const { problemId } = useParams();
  const [user, setUser] = useState(null);
  const [problem, setProblem] = useState(null);
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

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      fetch("http://localhost:5000/problem", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ problemId }),
      })
        .then((response) => response.json())
        .then((data) => {
          setProblem(data.problem);
        })
        .catch((error) => {
          console.error("Error fetching problem details:", error);
        });
    }
  }, [problemId]);

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "beginner";
      case "Intermediate":
        return "intermediate";
      case "Advanced":
        return "difficult";
      default:
        return "";
    }
  };

  if (!problem) {
    return;
  }

  return (
    <div style={{ height: "100vh" }}>
      <Header user={user} />
      <Split className="split">
        <div className="left-container">
          <Scrollbars
            renderThumbVertical={(props) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  backgroundColor: "#888",
                  minWidth: "5px",
                }}
              />
            )}
          >
            <div className="workspace-container">
              <div className="ws-problem-details">
                <div className="workspace-tab">Description</div>
                <div className="ws-problem-name">{problem.name}</div>
                <div
                  className={`ws-problem-level ${getDifficultyClass(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </div>
                <div className="ws-problem-description">
                  <span>{problem.description}</span>
                </div>
                <div className="ws-problem-examples">
                  {problem.examples.map((example, index) => (
                    <div className="ws-example" key={index}>
                      <p className="ex-name">Example {index + 1}:</p>
                      <div className="inandout">
                        <p>
                          <span>Input:</span> {example.input}
                        </p>
                        <p>
                          <span>Output:</span> {example.output}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
        <div className="right-container">
          <PlayGround problem={problem} />
        </div>
      </Split>
    </div>
  );
};

export default ProblemDescription;
