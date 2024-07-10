import { React } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideNav() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className={isActive("/home")}>
                <Link to="/home">
                  <i className="fe fe-home"></i> <span>Dashboard</span>
                </Link>
              </li>
              
              <li className="submenu">
                <Link>
                  <i className="fe fe-document"></i> <span> Registraion</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to={""}>Client</Link>
                  </li>
                  <li>
                    <Link to={""}>Therapist</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to={"/therapist"} className={isActive("/therapist")}>
                  <i className="fe fe-users"></i> <span>Therapists</span>
                </Link>
              </li>
              <li>
                <Link to={"/client"}>
                  <i className="fe fe-user-plus"></i> <span>Clients</span>
                </Link>
              </li>
              <li>
                <Link to={"/appointment"}>
                  <i className="fe fe-user"></i> <span>Appointments</span>
                </Link>
              </li>
              <li>
                <Link to={"/reviews"}>
                  <i className="fe fe-star-o"></i> <span>Reviews</span>
                </Link>
              </li>
              <li>
                <Link to={"/invoices"}>
                  <i className="fe fe-activity"></i> <span>Invoices</span>
                </Link>
              </li>
              <li>
                <Link to={"/plans"}>
                  <i className="fas fa-tasks"></i> <span>Plans</span>
                </Link>
              </li>
              <li>
                <Link to={"/blogs"}>
                  <i className="fa-solid fa-blog"></i> <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link to={"/courses"}>
                  <i className="fa-solid fa-user-graduate"></i>
                  <span>Courses</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
