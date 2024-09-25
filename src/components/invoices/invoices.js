import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Invoices() {
  return (
    <div class="content container-fluid">
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Invoice Report</h3>
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
                              aria-label="Invoice Number: activate to sort column descending"
                              style={{ width: "112.969px" }}
                            >
                              Invoice Number
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Patient ID: activate to sort column ascending"
                              style={{ width: "70.375px" }}
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
                              style={{ width: "141.609px" }}
                            >
                              Patient Name
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Total Amount: activate to sort column ascending"
                              style={{ width: "96.0469px" }}
                            >
                              Total Amount
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Created Date: activate to sort column ascending"
                              style={{ width: "92.25px" }}
                            >
                              Created Date
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Status: activate to sort column ascending"
                              style={{ width: "60.8906px" }}
                            >
                              Status
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Actions: activate to sort column ascending"
                              style={{ width: "112.859px" }}
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" class="odd">
                            <td class="sorting_1">
                              <a href="invoice.html">#IN0001</a>
                            </td>
                            <td>#PT001</td>
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
                            <td>$100.00</td>
                            <td>9 Sep 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
                              <a href="invoice.html">#IN0002</a>
                            </td>
                            <td>#PT002</td>
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
                            <td>$200.00</td>
                            <td>29 Oct 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
                              <a href="invoice.html">#IN0003</a>
                            </td>
                            <td>#PT003</td>
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
                            <td>$250.00</td>
                            <td>25 Sep 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
                              <a href="invoice.html">#IN0004</a>
                            </td>
                            <td>#PT004</td>
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
                            <td>$150.00</td>
                            <td>9 Oct 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
                              <a href="invoice.html">#IN0005</a>
                            </td>
                            <td>#PT005</td>
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
                            <td>$350.00</td>
                            <td>19 Nov 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
                              <a href="invoice.html">#IN0006</a>
                            </td>
                            <td>#PT006</td>
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
                            <td>$300.00</td>
                            <td>12 Oct 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
                              <a href="invoice.html">#IN0007</a>
                            </td>
                            <td>#PT007</td>
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
                            <td>$250.00</td>
                            <td>25 Oct 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
                              <a href="invoice.html">#IN0008</a>
                            </td>
                            <td>#PT008</td>
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
                            <td>$150.00</td>
                            <td>30 Oct 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
                              <a href="invoice.html">#IN0009</a>
                            </td>
                            <td>#PT009</td>
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
                            <td>$100.00</td>
                            <td>5 Nov 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
                              <a href="invoice.html">#IN0010</a>
                            </td>
                            <td>#PT010</td>
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
                                <a href="profile.html">Robert Rhodes </a>
                              </h2>
                            </td>
                            <td>$120.00</td>
                            <td>7 Nov 2023</td>
                            <td>
                              <span class="badge rounded-pill bg-success inv-badge">
                                Paid
                              </span>
                            </td>
                            <td>
                              <div class="actions">
                                <a
                                  data-bs-toggle="modal"
                                  href="#edit_invoice_report"
                                  class="btn btn-sm bg-success-light me-2"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
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
