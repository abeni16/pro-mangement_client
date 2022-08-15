import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar  bg-primary p-2 mb-4 p-0">
      <a className="navbar-brand  " href="/">
        <FaCheckCircle size={40} className="icon" />
        <h1>Pro Manage</h1>
      </a>
    </nav>
  );
};

export default Header;
