/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../css/LandingPage.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import waveformimg from "../../assests/img/waveform.png";
import ai from "../../assests/img/ai.png";
import app from "../../assests/img/app.png";
import c from "../../assests/img/c++.png";
import dl from "../../assests/img/dl.png";
import ml from "../../assests/img/ml.png";
import py from "../../assests/img/py.png";
import web from "../../assests/img/web.png";
import jv from "../../assests/img/java.png";
import devimg from "../../assests/img/dev-img.png";
import devcode from "../../assests/img/product-code.png";
import ps from "../../assests/img/ps.png";
import benecode from "../../assests/img/benecode.png";
import dwcode from "../../assests/img/dwcode.png";
import dwout from "../../assests/img/dwout.png";
import fc from "../../assests/img/fc.png";
import Header from "./Header";

function LandingPage() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div className="hero-section">
        <div className="heading-main">
          <span className="heading-text normal">Make your Learning </span>
          <span className="heading-text highlight">Next Gen </span>
          <span className="heading-text normal">
            regardless of your coding background
          </span>
        </div>
        <div className="heading-subtext">
          Modern, fast and improve your skills.
        </div>
        <div className="gs-button">
          <div className="gs-button-text">Get Started</div>
          <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
        </div>
        <div className="video-container">
          <img src={waveformimg} alt="Description of image" />
        </div>
      </div>

      {/* Options Section */}
      <div className="options-section">
        <div className="Oheading-main">
          <span className="Oheading-text-normal">Learn </span>
          <span className="Oheading-text-highlight1">Latest </span>
          <span className="Oheading-text-normal">technologies in </span>
          <span className="Oheading-text-highlight2">Ease</span>
        </div>

        <div className="options-container">
          <div className="option-card">
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
          <div className="option-card">
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
          <div className="option-card">
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
          <div className="option-card">
            <div className="ti-container">
              <div className="icon">
                <img className="ai-icon" src={web} alt="AI Icon" />
              </div>
              <div className="title">Websites</div>
            </div>
            <div className="description">
              Design and build responsive websites with HTML, CSS, JavaScript,
              and frameworks like React.
            </div>
          </div>
          <div className="option-card">
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
          <div className="option-card">
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
          <div className="option-card">
            <div className="ti-container">
              <div className="icon">
                <img className="ai-icon" src={c} alt="AI Icon" />
              </div>
              <div className="title">C++</div>
            </div>
            <div className="description">
              Master C++ for system programming, game development, and
              algorithms.
            </div>
          </div>
          <div className="option-card">
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

      {/* dev section */}
      <div className="dev-section">
        <div className="dev-heading">
          <span className="text-main">Apply your own</span>
          <span className="text-highlight">Coding</span>
          <span className="text-main">decisions</span>
        </div>
        <div className="dev-subtext">
          Flex Your Creativity, Write Your Code.
        </div>

        <div className="dev-container">
          <div className="outcard">
            <div className="outcard-left">
              <div className="product-card">
                <img className="product-img" src={devimg} />
              </div>
            </div>
            <div className="outcard-right">
              <div className="product-details">
                <div className="first-layer">
                  <p className="product-name">Dual Sense</p>
                </div>
                <div className="product-model">Wireless Controller</div>
                <div className="third-layer">
                  <div className="dicprice">$79.97</div>
                  <div className="actprice">$150</div>
                  <div className="discount">40% off</div>
                </div>
                <div className="fourth-layer">
                  <div className="quantity-selector">
                    <div className="quantity qactive">1</div>
                    <div className="quantity">2</div>
                    <div className="quantity">3</div>
                    <div className="quantity">4</div>
                    <div className="quantity">5</div>
                  </div>
                </div>
                <div className="fifth-layer">
                  <div className="buynow">
                    <p>Buy now</p>
                  </div>
                  <div className="addbag">
                    <p>Add to bag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={devcode} className="devcode" alt="dev-code" />
        </div>

        <div className="button-learn-more">
          <div className="learn-to-develop">Learn to Develop an E-commerce</div>
        </div>
      </div>

      {/* benefits section */}
      <div className="bene-section">
        <div className="bene-heading">
          <span className="text-mainbene">Think</span>
          <span className="text-highlightbene">out of the</span>
          <span className="text-mainbene">box</span>
        </div>
        <div className="bene-subtext">Not Just Coding—Solve Real Problems.</div>

        <div className="bene-container">
          <div className="bene-list">
            <div className="bene-option">
              <img src={ps} alt="ps" />
              <p>Improved Problem Solving</p>
            </div>
            <div className="bene-option">
              <img src={ps} alt="ps" />
              <p>Improved Problem Solving</p>
            </div>
            <div className="bene-option">
              <img src={ps} alt="ps" />
              <p>Improved Problem Solving</p>
            </div>
            <div className="bene-option">
              <img src={ps} alt="ps" />
              <p>Improved Problem Solving</p>
            </div>
            <div className="bene-option">
              <img src={ps} alt="ps" />
              <p>Improved Problem Solving</p>
            </div>
            <div className="bene-option">
              <img src={ps} alt="ps" />
              <p>Improved Problem Solving</p>
            </div>
          </div>
          <img className="bene-code" src={benecode} />
        </div>

        <div className="button-learn-more-accessibility">
          <div className="learn-more">Learn more</div>
        </div>
      </div>

      {/* dev web*/}
      <div className="dw-section">
        <div className="dw-heading">
          <span className="text-maindw">Learn to Develop</span>
          <span className="text-highlightdw">Websites.</span>
        </div>
        <div className="dw-subtext">Coding Designed for You.</div>

        <div className="dw-container">
          <img src={dwcode} alt="dwcode" />
          <img src={dwout} alt="dwout" />
        </div>

        <div className="button-learn-more-customization">
          <div className="learn-more1">Learn more</div>
        </div>
      </div>


      <div className="final-container">
        <img className="fc" src={fc} />
      </div>

    </div>
  );
}

export default LandingPage;
