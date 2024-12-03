import React, { useState, useEffect } from "react";
import "../css/PlayGround.css";
import "../css/WorkSpace.css";
import "../css/MainHeader.css";
import Split from "react-split";
import MonacoEditor from "@monaco-editor/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "../css/RightFooter.css";

const PlayGround = ({ problem }) => {
  const [code, setCode] = useState(problem.function_signature);
  const [sizes] = useState([70, 30]);
  const [activeTab, setActiveTab] = useState("testCase");
  const [selectedCase, setSelectedCase] = useState(0);
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    if (problem && problem._id) {
      const savedCode = localStorage.getItem(problem._id);
      if (savedCode) {
        setCode(savedCode);
      }
    }
  }, [problem]);

  useEffect(() => {
    if (problem && problem._id) {
      localStorage.setItem(problem._id, code);
    }
  }, [code, problem._id]);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCaseClick = (index) => {
    setSelectedCase(index);
  };

  const handleRunCode = async () => {
    try {
      const response = await fetch("http://localhost:5000/runCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, problemid: problem._id }),
      });

      const result = await response.json();

      if (response.ok) {
        setTestResults(result); // Update test results if the code ran successfully
      } else {
        setTestResults([
          {
            input: "Error",
            expectedOutput: "Error",
            userOutput: "Error",
            passed: false,
            error: "Execution Error",
          },
        ]);
      }
    } catch (error) {
      console.error("Error executing code:", error);
      setTestResults([
        {
          input: "Error",
          expectedOutput: "Error",
          userOutput: "Error",
          passed: false,
          error: "Execution Error",
        },
      ]);
    }
  };

  const handleSubmitCode = async () => {
    try {
      const token = localStorage.getItem("authToken");
  
      const response = await fetch("http://localhost:5000/submitCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          code,
          problemId: problem._id,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log("Code submitted successfully:", result.message);
        setTestResults(result.testResults);
      } else {
        console.error("Error submitting code:", result.message);
      }
    } catch (error) {
      console.error("Error submitting code:", error);
    }
  };
  

  return (
    <div>
      <Split
        className="split2"
        direction="vertical"
        sizes={sizes}
        gutterSize={15}
      >
        <div className="editor-container">
          <div className="preference-nav">
            <div className="prefered-lang">Python</div>
          </div>
          <div className="monoco-editor-container">
            <MonacoEditor
              language="python"
              value={code}
              onChange={handleEditorChange}
              theme="vs-dark"
            />
          </div>
        </div>

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
          <div className="usecases">
            <div className="usecase-header">
              <p
                className={activeTab === "testCase" ? "uh-active" : ""}
                onClick={() => handleTabClick("testCase")}
              >
                Test Case
              </p>
              <p
                className={activeTab === "testResult" ? "uh-active" : ""}
                onClick={() => handleTabClick("testResult")}
              >
                Test Result
              </p>
            </div>

            {activeTab === "testCase" && (
              <>
                <div className="use-cases">
                  {problem?.examples?.map((example, index) => (
                    <div
                      key={example._id}
                      className={`case ${
                        selectedCase === index ? "selected" : ""
                      }`}
                      onClick={() => handleCaseClick(index)}
                    >
                      Case {index + 1}
                    </div>
                  ))}
                </div>

                {selectedCase !== null && (
                  <div className="in-out-container">
                    <p>Input</p>
                    <span>{problem.examples[selectedCase].input}</span>
                    <p>Output</p>
                    <span>{problem.examples[selectedCase].output}</span>
                  </div>
                )}
              </>
            )}

            {activeTab === "testResult" && testResults.length > 0 && (
              <>
                {testResults.map((result, index) => (
                  <div key={index} className="use-cases-r">
                    <div className="case-r">Case {index + 1}</div>

                    <div className="in-out-container-r">
                      <p>Input</p>
                      <span>{result.input}</span>

                      <p>Output</p>
                      <span>{result.userOutput}</span>

                      <p>Expected Output</p>
                      <span>{result.expectedOutput}</span>

                      <p>Status</p>
                      <span>{result.passed ? "Passed" : "Failed"}</span>

                      {result.error && (
                        <>
                          <p>Error</p>
                          <span>{result.error}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </Scrollbars>
      </Split>

      <div className="footer-container">
        <div className="action-buttons">
          <button className="run-button" onClick={handleRunCode}>
            Run
          </button>
          <button className="submit-button" onClick={handleSubmitCode}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
