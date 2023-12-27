import React, { useState } from "react";
// import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // const buttonChangehandler = () => {
  //   if (btnName === "login") {
  //     setBtnName("logout");
  //   } else if (btnName === "logout") {
  //     setBtnName("login");
  //   }
  //   console.log(btnName);
  // };

  const buttonChangehandler = () => {
   
    // if (btnName === "Login") {
    //   setBtnName("Logout");
    // } else if (btnName === "Logout") {
    //   setBtnName("Login");
    // }
   
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    console.log(btnName);
  };


  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=826"
          alt="logo_url"
        />
      </div>  
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
