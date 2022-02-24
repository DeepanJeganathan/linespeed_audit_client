import React from "react";

import { Link } from "react-router-dom";

export default function () {
  return (
    <nav className="navbar d-flex flex-column  navbar-expand-sm navbar-light align-items-start ">     
        <div className="d-flex w-100 justify-content-between   bg-brand">
          <a href="#" className="navbar-brand p-3 ">
            Line Speed Report
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse w-100 align-items-start navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className=" navbar-nav d-flex flex-column align-items-center align-items-sm-start px-3">
            <li className="nav-item mt-4 ">
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
            <li className=" py-md-3 nav-item">
              <Link to={"/auditform"} className="nav-link fs-5" href="#">
                <i className="bi bi-pen"></i> Audit Form
              </Link>
            </li>
            <li className="nav-item py-md-3 ">
              <Link to={"/recent"} className="nav-link fs-5 " href="#">
                <i className="bi bi-clock-history"></i> View Recent Entries
              </Link>
            </li>
            <li className="nav-item py-md-3">
              <a className="nav-link fs-5" href="#">
                Rated vs Actual speed
              </a>
            </li>
            <li className="nav-item py-md-3">
              <a className="nav-link   fs-5" href="#">
                <i className="bi bi-star"></i> Top Perfroming Workstation
              </a>
            </li>
          </ul>
        </div>
      
    </nav>
  );
}
