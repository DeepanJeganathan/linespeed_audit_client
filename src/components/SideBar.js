import React from "react";

export default function () {
  return (
    <nav className="navbar  navbar-expand-md navbar-light align-items-start ">
      <div className="container-fluid d-flex flex-md-column">
        <div className="d-flex justify-content-between w-100 border-bottom ">
          <a href="#" className="navbar-brand ">
            <h3 className="text-primary "> Line Speed Insight</h3>{" "}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="  navbar-nav d-flex flex-md-column  align-items-sm-center align-items-md-start">
            <li className="nav-item mt-4">
              <a className="py-3 nav-link active " aria-current="page" href="#">
                <span className="border-bottom border-danger"> Main</span>
              </a>
            </li>
            <li className=" py-md-3 nav-item">
              <a className="nav-link" href="#">
                Audit Form
              </a>
            </li>
            <li className="nav-item py-md-3">
              <a className="nav-link" href="#">
                View Recent Entries
              </a>
            </li>
            <li className="nav-item py-md-3">
              <a className="nav-link" href="#">
                Rated vs Actual speed
              </a>
            </li>
            <li className="nav-item py-md-3">
              <a className="nav-link" href="#">
                Top Perfroming Workstation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
