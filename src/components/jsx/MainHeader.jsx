import React from "react";
import '../css/MainHeader.css'

function Header({ user }) {

  return (
    <div className="MainHeader">
      <div className="MainHeader-brandname">CODIO</div>

      {/* Ensure that user data is available before rendering the user's name and profile picture */}
      {user ? (
        <div className="MainHeader-user-details">
          <p>{user.name}</p>
          <div
            className="MainHeader-user-profile"
            style={{ backgroundImage: `url(${user.profilePic})` }}
          ></div>
        </div>
      ) : (
        <div className="MainHeader-login-message">
          Please log in to access the content.
        </div>
      )}
    </div>
  );
}

export default Header;
