import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark mb-3">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <span>RG</span> Granite LLC
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Granite
                </a>
              </li>
              <li
                className="nav-item"
                data-toggle="popover"
                data-trigger="hover"
                title="Coming soon!!!"
              >
                <a className="nav-link" href="index.html">
                  Quartz
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-placeholder"></div>
    </>
  );
};

export default NavBar;
