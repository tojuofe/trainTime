import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="white">
          <div className="container">
            <div className="nav-wrapper">
              <a
                href="!#"
                className="brand-logo grey-text black-text text-darken-4"
              >
                Train Time
              </a>
              <a href="!#" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons black-text">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="#home" className="black-text">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#latestnews" className="black-text">
                    Latest news
                  </a>
                </li>
                <li>
                  <a href="#about" className="black-text">
                    About
                  </a>
                </li>
                <li>
                  <a href="#signup" className="black-text">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="#login" className="black-text">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        <li>
          <a href="#home" className="black-text">
            Home
          </a>
        </li>
        <li>
          <a href="#latestnews" className="black-text">
            Latest news
          </a>
        </li>
        <li>
          <a href="#about" className="black-text">
            About
          </a>
        </li>
        <li>
          <a href="#signup" className="black-text">
            Sign Up
          </a>
        </li>
        <li>
          <a href="#login" className="black-text">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
