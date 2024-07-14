import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/custom.css";

export default function SideNav() {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div
          className="slimScrollDiv"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%"
          }}
        >
          <div
            className="sidebar-inner slimscroll"
            style={{ overflow: "hidden", width: "100%" }}
          >
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="active">
                  <Link to={"/home"} className="link">
                    <i className="fe fe-home"></i> <span>Dashboard</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link className="link">
                    <i className="fe fe-document"></i>{" "}
                    <span> Registration</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <div className="submenu-list-2">
                    <li>
                      <Link to="/clientregistration" className="link">
                        <span>Client</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/therapistregistration" className="link">
                        <span>Therapist</span>
                      </Link>
                    </li>
                  </div>
                </li>
                <li>
                  <Link to={"/therapist"} className="link">
                    <i className="fe fe-users"></i> <span>Therapists</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/client"} className="link">
                    <i className="fe fe-user-plus"></i> <span>Clients</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/appointment"} className="link">
                    <i className="fe fe-user"></i> <span>Appointments</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/reviews"} className="link">
                    <i className="fe fe-star-o"></i> <span>Reviews</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/invoices"} className="link">
                    <i className="fe fe-activity"></i> <span>Invoices</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/plans"} className="link">
                    <i
                      className="fas fa-tasks"
                      style={{ fontSize: "16px" }}
                    ></i>{" "}
                    <span>Plans</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/blogs"} className="link">
                    <i
                      className="fa-solid fa-blog"
                      style={{ fontSize: "16px" }}
                    ></i>{" "}
                    <span>Blogs</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/courses"} className="link">
                    <i
                      className="fa-solid fa-user-graduate"
                      style={{ fontSize: "16px" }}
                    ></i>
                    <span>Courses</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="slimScrollBar"
            style={{
              background: "rgb(204, 204, 204)",
              width: "7px",
              position: "absolute",
              top: "0px",
              opacity: "0.4",
              display: "block",
              borderRadius: "7px",
              zIndex: "99",
              right: "1px",
              height: "410.274px"
            }}
          ></div>
          <div
            className="slimScrollRail"
            style={{
              width: "7px",
              height: "100%",
              position: "absolute",
              top: "0px",
              display: "none",
              borderRadius: "7px",
              background: "rgb(51, 51, 51)",
              opacity: "0.2",
              zIndex: "90",
              right: "1px"
            }}
          ></div>
        </div>
      </div>
      <i className="fe fe-text-align-left" id="toggleSidebarIcon"></i>
    </>
  );
}
