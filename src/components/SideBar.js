import React from "react";

import { Link } from "react-router-dom";

export default function () {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="bg-dark justify-content-between d-flex col">
        <a href="#" className="navbar-brand">
          Line Speed Report
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className=" navbar-nav align-items-center align-items-sm-start px-3">
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
