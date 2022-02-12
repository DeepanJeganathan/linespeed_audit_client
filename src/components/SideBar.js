import React from "react";

export default function () {
  return (
    <nav className="navbar  navbar-expand-md navbar-light align-items-start">
      <div className="container-fluid d-flex flex-md-column">
        <div className="d-flex justify-content-between w-100 ">
          <a href="#" className="navbar-brand ">
            Line Speed Insight
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
          <ul className="navbar-nav d-flex flex-md-column  align-items-sm-center align-items-md-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Main
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Enter audit
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                View Recent Entries
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Rated vs Actual speed
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Best perfroming workstation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
