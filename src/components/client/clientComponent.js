import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function ClientComponent() {
  return (
    <>
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">List of Client</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
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
                                  aria-label="Patient ID: activate to sort column descending"
                                  style={{ width: "67.2031px" }}
                                >
                                  Patient ID
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_0"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Patient Name: activate to sort column ascending"
                                  style={{ width: "137.375px" }}
                                >
                                  Patient Name
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_0"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Age: activate to sort column ascending"
                                  style={{ width: "25.1094px" }}
                                >
                                  Age
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_0"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Address: activate to sort column ascending"
                                  style={{ width: "361.266px" }}
                                >
                                  Address
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_0"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Phone: activate to sort column ascending"
                                  style={{ width: "57.5312px" }}
                                >
                                  Email id
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_0"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Phone: activate to sort column ascending"
                                  style={{ width: "57.5312px" }}
                                >
                                  Phone
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_0"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Last Visit: activate to sort column ascending"
                                  style={{ width: "61.4531px" }}
                                >
                                  Last Visit
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_0"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Paid: activate to sort column ascending"
                                  style={{ width: "30.1406px" }}
                                >
                                  Paid
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr role="row" class="odd">
                                <td class="sorting_1">#PT001</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient1.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html">Charlene Reed </a>
                                  </h2>
                                </td>
                                <td>29</td>
                                <td>
                                  4417 Goosetown Drive, Taylorsville, North
                                  Carolina, 28681
                                </td>
                                <td>a@gmail.com</td>
                                <td>8286329170</td>
                                <td>20 Oct 2023</td>
                                <td>$100.00</td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1">#PT002</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient2.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html">Travis Trimble </a>
                                  </h2>
                                </td>
                                <td>23</td>
                                <td>
                                  4026 Fantages Way, Brunswick, Maine, 04011
                                </td>
                                <td>a@gmail.com</td>
                                <td>2077299974</td>
                                <td>22 Oct 2023</td>
                                <td>$200.00</td>
                              </tr>
                              <tr role="row" class="odd">
                                <td class="sorting_1">#PT003</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient3.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html">Carl Kelly</a>
                                  </h2>
                                </td>
                                <td>29</td>
                                <td>
                                  2037 Pearcy Avenue, Decatur, Indiana, 46733
                                </td>
                                <td>a@gmail.com</td>
                                <td>2607247769</td>
                                <td>21 Oct 2023</td>
                                <td>$250.00</td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1">#PT004</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient4.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html"> Michelle Fairfax</a>
                                  </h2>
                                </td>
                                <td>25</td>
                                <td>
                                  2037 Pearcy Avenue, Decatur, Indiana, 46733
                                </td>
                                <td>a@gmail.com</td>
                                <td>5043686874</td>
                                <td>21 Sep 2023</td>
                                <td>$150.00</td>
                              </tr>
                              <tr role="row" class="odd">
                                <td class="sorting_1">#PT005</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient5.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html">Gina Moore</a>
                                  </h2>
                                </td>
                                <td>23</td>
                                <td>
                                  888 Everette Alley, Hialeah, Florida, 33012
                                </td>
                                <td>a@gmail.com</td>
                                <td>9548207887</td>
                                <td>18 Sep 2023</td>
                                <td>$350.00</td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1">#PT006</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient6.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html">Elsie Gilley</a>
                                  </h2>
                                </td>
                                <td>16</td>
                                <td>
                                  644 Coffman Alley, Bowling Green, Kentucky,
                                  42101
                                </td>
                                <td>a@gmail.com</td>
                                <td>3153844562</td>
                                <td>18 Sep 2023</td>
                                <td>$300.00</td>
                              </tr>
                              <tr role="row" class="odd">
                                <td class="sorting_1">#PT007</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient7.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html"> Joan Gardner</a>
                                  </h2>
                                </td>
                                <td>25</td>
                                <td>
                                  2399 Hillview Drive, San Francisco,
                                  California, 94103
                                </td>
                                <td>a@gmail.com</td>
                                <td>7072202603</td>
                                <td>18 Sep 2023</td>
                                <td>$250.00</td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1">#PT008</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient8.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html"> Daniel Griffing</a>
                                  </h2>
                                </td>
                                <td>21</td>
                                <td>
                                  4914 Hilltop Haven Drive, Passaic, New Jersey,
                                  07055
                                </td>
                                <td>a@gmail.com</td>
                                <td>9737739497</td>
                                <td>7 Sep 2023</td>
                                <td>$150.00</td>
                              </tr>
                              <tr role="row" class="odd">
                                <td class="sorting_1">#PT009</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient9.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html">Walter Roberson</a>
                                  </h2>
                                </td>
                                <td>18</td>
                                <td>
                                  1299 Star Trek Drive, Panama City, Florida,
                                  32405
                                </td>
                                <td>a@gmail.com</td>
                                <td>8503584445</td>
                                <td>11 Sep 2023</td>
                                <td>$100.00</td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1">#PT010</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a
                                      href="profile.html"
                                      class="avatar avatar-sm me-2"
                                    >
                                      <img
                                        class="avatar-img rounded-circle"
                                        src="assets/img/patients/patient10.jpg"
                                        alt="User Image"
                                      />
                                    </a>
                                    <a href="profile.html">Robert Rhodes</a>
                                  </h2>
                                </td>
                                <td>19</td>
                                <td>
                                  1214 Hamill Avenue, Del Mar, California, 92014
                                </td>
                                <td>a@gmail.com</td>
                                <td>8582595285</td>
                                <td>12 Sep 2023</td>
                                <td>$120.00</td>
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
      </div>
    </>
  );
}
