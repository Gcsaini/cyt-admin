import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Appointments() {
  return (
    <>
      <div class="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Appointments</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <div
                    id="DataTables_Table_0_wrapper"
                    className="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div
                          className="dataTables_length"
                          id="DataTables_Table_0_length"
                        >
                          <label>
                            Show{" "}
                            <select
                              name="DataTables_Table_0_length"
                              aria-controls="DataTables_Table_0"
                              className="custom-select custom-select-sm form-control form-control-sm"
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6"></div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="datatable table table-hover table-center mb-0 dataTable no-footer"
                          id="DataTables_Table_0"
                          role="grid"
                          aria-describedby="DataTables_Table_0_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-sort="ascending"
                                aria-label="Doctor Name: activate to sort column descending"
                                style={{ width: "205.141px" }}
                              >
                                Doctor Name
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Speciality: activate to sort column ascending"
                                style={{ width: "83.5156px" }}
                              >
                                Speciality
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Patient Name: activate to sort column ascending"
                                style={{ width: "161.062px" }}
                              >
                                Patient Name
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Appointment Time: activate to sort column ascending"
                                style={{ width: "152.375px" }}
                              >
                                Appointment Time
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Status: activate to sort column ascending"
                                style={{ width: "54.8281px" }}
                              >
                                Status
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Amount: activate to sort column ascending"
                                style={{ width: "68.0781px" }}
                              >
                                Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-02.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Darren Elder</a>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient2.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Travis Trimble </a>
                                </h2>
                              </td>
                              <td>
                                5 Nov 2023{" "}
                                <span className="text-success d-block">
                                  11.00 AM - 11.35 AM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_2"
                                    className="check"
                                    checked=""
                                  />
                                  <label for="status_2" className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$300.00</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-03.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Deborah Angel</a>
                                </h2>
                              </td>
                              <td>Cardiology</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient3.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Carl Kelly</a>
                                </h2>
                              </td>
                              <td>
                                11 Nov 2023{" "}
                                <span className="text-success d-block">
                                  12.00 PM - 12.15 PM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_3"
                                    className="check"
                                    checked=""
                                  />
                                  <label for="status_3" className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$150.00</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-09.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. John Gibbs</a>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient9.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Walter Roberson</a>
                                </h2>
                              </td>
                              <td>
                                21 Nov 2023{" "}
                                <span className="text-success d-block">
                                  12.10 PM - 12.25 PM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_9"
                                    className="check"
                                    checked=""
                                  />
                                  <label for="status_9" className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$300.00</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-06.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">
                                    Dr. Katharine Berthold
                                  </a>
                                </h2>
                              </td>
                              <td>Orthopaedics</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient6.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Elsie Gilley</a>
                                </h2>
                              </td>
                              <td>
                                16 Nov 2023{" "}
                                <span className="text-success d-block">
                                  1.00 PM - 1.15 PM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_6"
                                    className="check"
                                    checked=""
                                  />
                                  <label for="status_6" className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$250.00</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-07.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Linda Tobin</a>
                                </h2>
                              </td>
                              <td>Neurology</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient7.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Joan Gardner</a>
                                </h2>
                              </td>
                              <td>
                                18 Nov 2023{" "}
                                <span className="text-success d-block">
                                  1.10 PM - 1.25 PM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_7"
                                    className="check"
                                    checked=""
                                  />
                                  <label for="status_7" className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$260.00</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-05.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Marvin Campbell</a>
                                </h2>
                              </td>
                              <td>Orthopaedics</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient5.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Gina Moore</a>
                                </h2>
                              </td>
                              <td>
                                15 Nov 2023{" "}
                                <span className="text-success d-block">
                                  1.00 PM - 1.15 PM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_5"
                                    className="check"
                                    checked=""
                                  />
                                  <label for="status_5" className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$200.00</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-10.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Olga Barlow</a>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient10.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Robert Rhodes</a>
                                </h2>
                              </td>
                              <td>
                                23 Nov 2023{" "}
                                <span className="text-success d-block">
                                  12.10 PM - 12.25 PM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_11"
                                    className="check"
                                    checked=""
                                  />
                                  <label
                                    for="status_11"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$300.00</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-08.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Paul Richard</a>
                                </h2>
                              </td>
                              <td>Dermatology</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient8.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html"> Daniel Griffing</a>
                                </h2>
                              </td>
                              <td>
                                18 Nov 2023{" "}
                                <span className="text-success d-block">
                                  11.10 AM - 11.25 AM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_8"
                                    className="check"
                                    checked=""
                                  />
                                  <label for="status_8" className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$260.00</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Ruby Perrin</a>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient1.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Charlene Reed </a>
                                </h2>
                              </td>
                              <td>
                                9 Nov 2023{" "}
                                <span className="text-success d-block">
                                  11.00 AM - 11.15 AM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    checked=""
                                  />
                                  <label for="status_1" className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$200.00</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-04.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Sofia Brient</a>
                                </h2>
                              </td>
                              <td>Urology</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="profile.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient4.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html"> Michelle Fairfax</a>
                                </h2>
                              </td>
                              <td>
                                7 Nov 2023{" "}
                                <span className="text-success d-block">
                                  1.00 PM - 1.20 PM
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_4"
                                    className="check"
                                  />
                                  <label for="status_4" className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td>$150.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ marginBottom: "20px", marginTop: "20px" }}
                    >
                      <Stack spacing={2} style={{alignItems:"center"}}>
                        <Pagination count={10} color="success" />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
