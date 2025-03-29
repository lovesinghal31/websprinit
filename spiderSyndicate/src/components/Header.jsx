import React from "react";
import gdgLogo from "../assets/gdg-community.png"
function Header() {
  return (
    <>
      <div className="navbar bg-base-100 nbg sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow rounded-2xl"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Our Guide's</a>
              </li>
              <li>
                <a>Events Gallery</a>
              </li>
              <li>
                <a>Meet US</a>
              </li>
              <li>
                <a>Live Events</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            <img className="w-12 mix-blend-color" src="https://th.bing.com/th/id/OIP.OjumLBFieAdP5YO_e6N7wwHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="gdg-log-ietdavv" />
            GDGOC IET-DAVV
          </a>
        </div>
        <div className="navbar-end">
          <a href="https://gdg.community.dev/" target="_blank">
            <img className="w-3xs" src={gdgLogo} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
