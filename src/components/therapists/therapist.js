import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function Therapist() {
  return (
    <>
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">List of Therapist</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <div
                    id="DataTables_Table_0_wrapper"
                    class="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <div
                          class="dataTables_length"
                          id="DataTables_Table_0_length"
                        >
                          <label>
                            Show{" "}
                            <select
                              name="DataTables_Table_0_length"
                              aria-controls="DataTables_Table_0"
                              class="custom-select custom-select-sm form-control form-control-sm"
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
                      <div class="col-sm-12 col-md-6"></div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <table
                          class="datatable table table-hover table-center mb-0 dataTable no-footer"
                          id="DataTables_Table_0"
                          role="grid"
                          aria-describedby="DataTables_Table_0_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                class="sorting_asc"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-sort="ascending"
                                aria-label="Doctor Name: activate to sort column descending"
                                style={{ width: "260.016px" }}
                              >
                                Doctor Name
                              </th>
                              <th
                                class="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Speciality: activate to sort column ascending"
                                style={{ width: "110.938px" }}
                              >
                                Speciality
                              </th>
                              <th
                                class="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Member Since: activate to sort column ascending"
                                style={{ width: "150.609px" }}
                              >
                                Member Since
                              </th>
                              <th
                                class="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Earned: activate to sort column ascending"
                                style={{ width: "83.6562px" }}
                              >
                                Earned
                              </th>
                              <th
                                class="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Account Status: activate to sort column ascending"
                                style={{ width: "157.781px" }}
                              >
                                Account Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" class="odd">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-02.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Darren Elder</a>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                11 Jun 2023 <br />
                                <small>4.50 AM</small>
                              </td>
                              <td>$5000.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_2"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_2" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-03.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Deborah Angel</a>
                                </h2>
                              </td>
                              <td>Cardiology</td>
                              <td>
                                4 Jan 2018 <br />
                                <small>9.40 AM</small>
                              </td>
                              <td>$3300.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_3"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_3" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" class="odd">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-09.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. John Gibbs</a>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                21 Apr 2018 <br />
                                <small>02.59 PM</small>
                              </td>
                              <td>$4100.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_9"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_9" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
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
                                23 Mar 2023 <br />
                                <small>02.50 PM</small>
                              </td>
                              <td>$4000.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_6"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_6" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" class="odd">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-07.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Linda Tobin</a>
                                </h2>
                              </td>
                              <td>Neurology</td>
                              <td>
                                14 Dec 2018 <br />
                                <small>01.59 AM</small>
                              </td>
                              <td>$2000.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_7"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_7" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-05.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Marvin Campbell</a>
                                </h2>
                              </td>
                              <td>Orthopaedics</td>
                              <td>
                                24 Jan 2023 <br />
                                <small>02.59 AM</small>
                              </td>
                              <td>$3700.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_5"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_5" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" class="odd">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-10.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Olga Barlow</a>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                15 Feb 2018 <br />
                                <small>03.59 AM</small>
                              </td>
                              <td>$3500.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_10"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_10" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-08.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Paul Richard</a>
                                </h2>
                              </td>
                              <td>Dermatology</td>
                              <td>
                                11 Jan 2023 <br />
                                <small>02.59 AM</small>
                              </td>
                              <td>$3000.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_8"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_8" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" class="odd">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Ruby Perrin</a>
                                </h2>
                              </td>
                              <td>Dental</td>
                              <td>
                                14 Jan 2023 <br />
                                <small>02.59 AM</small>
                              </td>
                              <td>$3100.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_1" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">
                                <h2 class="table-avatar">
                                  <a
                                    href="profile.html"
                                    class="avatar avatar-sm me-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-04.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="profile.html">Dr. Sofia Brient</a>
                                </h2>
                              </td>
                              <td>Urology</td>
                              <td>
                                5 Jul 2023 <br />
                                <small>12.59 AM</small>
                              </td>
                              <td>$3500.00</td>
                              <td>
                                <div class="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_4"
                                    class="check"
                                    checked=""
                                  />
                                  <label for="status_4" class="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ marginBottom: "20px", marginTop: "20px" }}
                    >
                      <Stack spacing={2} style={{ alignItems: "center" }}>
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
