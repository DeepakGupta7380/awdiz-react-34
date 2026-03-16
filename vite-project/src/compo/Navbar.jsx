import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Deepak</h2>

      <div className="menu">
        <span>Men</span>
        <span>Women</span>
        <span>Kids</span>
        <span>Home</span>
      </div>

      <div className="auth">
        <span>Login</span>
        <span>Register</span>
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Navbar;