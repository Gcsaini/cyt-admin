import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function Review() {
  return (
    <div class="content container-fluid">
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Reviews</h3>
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
                              aria-label="Patient Name: activate to sort column descending"
                              style={{ width: "136.359px" }}
                            >
                              Patient Name
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Doctor Name: activate to sort column ascending"
                              style={{ width: "174.969px" }}
                            >
                              Doctor Name
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Ratings: activate to sort column ascending"
                              style={{ width: "54.0938px" }}
                            >
                              Ratings
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Description: activate to sort column ascending"
                              style={{ width: "343.812px" }}
                            >
                              Description
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Date: activate to sort column ascending"
                              style={{ width: "57.5px" }}
                            >
                              Date
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Actions: activate to sort column ascending"
                              style={{ width: "50.7812px" }}
                            >
                              Actions
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
                                    src="assets/img/patients/patient4.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html"> Michelle Fairfax</a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              27 Sep 2023 <br />
                              <small>03.40 PM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
                                    src="assets/img/patients/patient3.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Carl Kelly</a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              1 Nov 2023
                              <br /> <small>02.59 PM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
                                    src="assets/img/patients/patient1.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Charlene Reed </a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              3 Nov 2023 <br />
                              <small>09.59 AM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
                                    src="assets/img/patients/patient8.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Daniel Griffing</a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              16 Jun 2023 <br />
                              <small>04.50 PM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
                                    src="assets/img/patients/patient6.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Elsie Gilley</a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              22 Aug 2023 <br />
                              <small>01.50 PM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
                                    src="assets/img/patients/patient5.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Gina Moore</a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              24 Sep 2023 <br />
                              <small>04.38 PM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
                                    src="assets/img/patients/patient10.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Harry Williams</a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              15 Feb 2023 <br />
                              <small>07.30 PM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
                                    src="assets/img/patients/patient7.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Joan Gardner</a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              21 Jul 2023 <br />
                              <small>05.50 PM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
                                    src="assets/img/patients/patient2.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Travis Trimble </a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              2 Nov 2023
                              <br /> <small>08.50 AM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
                                    src="assets/img/patients/patient9.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Walter Roberson</a>
                              </h2>
                            </td>
                            <td>
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
                            <td>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star text-warning"></i>
                              <i class="fe fe-star-o text-secondary"></i>
                            </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </td>
                            <td>
                              11 Mar 2023 <br />
                              <small>05.55 PM</small>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-bs-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
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
  );
}
