import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './navepage.css';
import img4 from "../assets/11.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="#">
        <img src={img4} alt="Logo" width="200" height="50"/>
        
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto "
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item mx-auto">
              <Link to="/" className="nav-link active" aria-current="page">
                Front Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
              Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/invoice" className="nav-link">
                Invoice
              </Link>
            </li>
            <li className="nav-item dropdown ">
              
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another Action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something Else Here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>




  );
};

export default Navbar;