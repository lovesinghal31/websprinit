import React from "react";
import gdgLogo from "../assets/gdg-community.png"
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="navbar bg-white sticky top-0 z-40 font-bold">
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow rounded-2xl"
            >
              <li>
                <Link to={''}>Home</Link>
              </li>
              <li>
                <Link to={'eventgallery'}>Events Gallery</Link>
              </li>
              <li>
                <Link to={'mentor'}>Mentor</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            <img className="w-12" src="https://th.bing.com/th/id/OIP.OjumLBFieAdP5YO_e6N7wwHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="gdg-log-ietdavv" />
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
