import React from "react";
import { Link } from "react-router-dom";
import search from "../img/search.png";

export default function Header() {
  const navList = [
    {
      id: 1,
      text: "Home",
      to: "/",
    },
    {
      id: 2,
      text: "Popular",
      to: "/popular",
    },
    {
      id: 3,
      text: "Anime News",
      to: "/all-the-anime-news",
    },
    {
      id: 4,
      text: "Help",
      to: "/all-the-anime-help",
    },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg header_navbar navbar-light bg-light container-fluid d-flex align-items-center">
        <div className="header_logo ms-5">
          <img
            src={require("../img/header_logo.png")}
            width="100px"
            className="header_img"
            alt="anime logo"
          />
        </div>
        <div className="nav_list" id="navbarSupportedContent">
          <ul className="nav_list navbar-nav me-auto mb-2 mb-lg-0">
            {navList.map((list) => (
              <li className="nav-item">
                <Link to={list.to} className={`link`}>
                  {list.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="anime_search">

        </div> */}
        <div className="p-2 bg-light rounded rounded-pill input-gp ms-auto ">
          <div className="input-group ">
            <input
              type="search"
              placeholder="Search Here.."
              aria-describedby="button-addon1"
              className="form-control border-0 bg-light"
            />
            <div class="input-group-append">
              <button
                id="button-addon1"
                type="submit"
                className="btn btn-link text-primary"
              >
                <img src={search} alt="search" width="20px" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
