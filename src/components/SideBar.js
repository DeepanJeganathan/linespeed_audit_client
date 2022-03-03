import React from "react";

import { Link } from "react-router-dom";

export default function () {
  return (
    <nav className="navbar sidebar">
      <div className="bg-brand justify-content-between py-2 col">
        <a href="#" className="navbar-brand justify-content-between">
          Line Speed Report
        </a>       
      </div>

      <div className=" sidebar-menu align-items-start" id="navbarSupportedContent">
        <ul className=" navbar-nav flex-column  px-3">
          <li key='1' className="nav-item mt-4 ">
            <Link
              to={"/"}
              className="py-3 nav-link  "
              aria-current="page"
              href="#"
            >
              <span className="border-bottom border-danger fs-4">
                <i className="text-primary bi bi-speedometer2"></i> Main
              </span>
            </Link>
          </li>
          <li key='2' className=" py-md-3 nav-item">
            <Link to={"/auditform"} className="nav-link fs-5" href="#">
              <i className="bi bi-pen"></i> Audit Form
            </Link>
          </li>
          <li key='3' className="nav-item py-md-3 ">
            <Link to={"/recent"} className="nav-link fs-5 " href="#">
              <i className="bi bi-clock-history"></i> View Recent Entries
            </Link>
          </li>
          <li key='4' className="nav-item py-md-3">
          <Link
              to={"/"}
              className="py-3 nav-link  "
              aria-current="page"
              href="#"
            >
              Rated vs Actual speed
            </Link>
          </li>
          <li key='5' className="nav-item py-md-3">
          <Link
              to={"/"}
              className="py-3 nav-link  "
              aria-current="page"
              href="#"
            > Top Perfroming Workstation
          </Link>
          </li>
          
        </ul>
        
      </div>
   
    </nav>
  );
}
