import { useNavigate } from "react-router-dom";
import "../../src/assets/css/custom.css";
import {Scriptfile} from "../../src/assets/js/script.js";

export default function SideNav() {
  const navigate = useNavigate();

  function handleDashboard(nav) {
    navigate(nav);
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
              <li className="active">
                <a href="#" onClick={() => handleDashboard("/home")}>
                  <i className="fe fe-home"></i> <span>Dashboard</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-layout"></i> <span> Registration</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
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
      <script src={Scriptfile}></script>
    </>
  );
}
