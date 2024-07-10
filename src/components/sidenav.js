import { React } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/assets/css/custom.css";
import { useState } from "react";

export default function SideNav() {
  const navigate = useNavigate();

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  function handleDashboard(nav) {
    navigate(nav);
  }

  function toggleRegistrationDropdown() {
    setIsRegistrationOpen(!isRegistrationOpen);
  }
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li>
                <a href="#" onClick={() => handleDashboard("/home")}>
                  <i className="fe fe-home"></i> <span>Dashboard</span>
                </a>
              </li>
              <li className={`submenu ${isRegistrationOpen ? "open" : ""}`}>
                <a href="#" onClick={toggleRegistrationDropdown}>
                  <i className="fe fe-layout"></i> <span> Registration</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul
                  style={{
                    display: isRegistrationOpen ? "block" : "none"
                  }}
                >
                  <li>
                    <a href="#">Client</a>
                  </li>
                  <li>
                    <a href="#">Therapist</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="specialities.html">
                  <i className="fe fe-users"></i> <span>Therapists</span>
                </a>
              </li>
              <li>
                <a href="doctor-list.html">
                  <i className="fe fe-user-plus"></i> <span>Clients</span>
                </a>
              </li>
              <li>
                <a href="patient-list.html">
                  <i className="fe fe-user"></i> <span>Appointments</span>
                </a>
              </li>
              <li>
                <a href="reviews.html">
                  <i className="fe fe-star-o"></i> <span>Reviews</span>
                </a>
              </li>
              <li>
                <a href="transactions-list.html">
                  <i className="fe fe-activity"></i> <span>Invoices</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
