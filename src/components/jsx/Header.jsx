import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("Tech");

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActiveNav("Tech");
    } else if (currentPath === "/pricing") {
      setActiveNav("Pricing");
    } else if (currentPath === "/login") {
      setActiveNav("Login");
    } else if (currentPath === "/register") {
      setActiveNav("Register");
    }
  }, [location]);

  const navItems = [
    { name: "Tech" , path: "/"},
    { name: "Pricing", path: "/pricing" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <div className="header-container">
      <div className="header-innerContainer">
        <div className="brand-name">CODIO</div>
        <div className="nav-items">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} style={{ textDecoration: 'none' }}>
              <div
                className={`nav-item ${activeNav === item.name ? "nav-item-active" : ""}`}
              >
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
