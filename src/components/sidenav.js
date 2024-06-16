export default function SideNav() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="active">
              <a href="index.html">
                <i className="fe fe-home"></i> <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="appointment-list.html">
                <i className="fe fe-layout"></i> <span>Appointments</span>
              </a>
            </li>
            <li>
              <a href="specialities.html">
                <i className="fe fe-users"></i> <span>Specialities</span>
              </a>
            </li>
            <li>
              <a href="doctor-list.html">
                <i className="fe fe-user-plus"></i> <span>Doctors</span>
              </a>
            </li>
            <li>
              <a href="patient-list.html">
                <i className="fe fe-user"></i> <span>Patients</span>
              </a>
            </li>
            <li>
              <a href="reviews.html">
                <i className="fe fe-star-o"></i> <span>Reviews</span>
              </a>
            </li>
            <li>
              <a href="transactions-list.html">
                <i className="fe fe-activity"></i> <span>Transactions</span>
              </a>
            </li>
            <li>
              <a href="settings.html">
                <i className="fe fe-vector"></i> <span>Settings</span>
              </a>
            </li>
            <li className="submenu">
              <a href="reports">
                <i className="fe fe-document"></i> <span> Reports</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="invoice-report.html">Invoice Reports</a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Pages</span>
            </li>
            <li>
              <a href="profile.html">
                <i className="fe fe-user-plus"></i> <span>Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
