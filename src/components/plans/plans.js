import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Plans() {
  const [formData, setFormData] = useState({
    serviceName: "",
    image: null,
    details: "",
    offer: "",
    coupanCode: ""
  });

  const [plans, setPlans] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    setPlans([...plans, { ...formData, status: true }]);
    setFormData({
      serviceName: "",
      image: null,
      details: "",
      offer: "",
      coupanCode: ""
    });
  };

  const handleStatusChange = (index) => {
    const newPlans = [...plans];
    newPlans[index].status = !newPlans[index].status;
    setPlans(newPlans);
  };

  return (
    <>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Plans</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Plans</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="mb-2">Service Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="serviceName"
                      value={formData.serviceName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      onChange={handleChange}
                    />
                    <small className="text-secondary">
                      Recommended image size is <b>150px x 150px</b>
                    </small>
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Details</label>
                    <input
                      type="text"
                      className="form-control"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Offer</label>
                    <input
                      type="text"
                      className="form-control"
                      name="offer"
                      value={formData.offer}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Coupan Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="coupanCode"
                      value={formData.coupanCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
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
                                aria-label="Service Name: activate to sort column descending"
                                style={{ width: "260.016px" }}
                              >
                                Service Name
                              </th>
                              <th
                                className="sorting_asc"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-sort="ascending"
                                aria-label="Image: activate to sort column descending"
                                style={{ width: "260.016px" }}
                              >
                                Image
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Details: activate to sort column ascending"
                                style={{ width: "110.938px" }}
                              >
                                Details
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Offer: activate to sort column ascending"
                                style={{ width: "150.609px" }}
                              >
                                Offer
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Coupan Code: activate to sort column ascending"
                                style={{ width: "83.6562px" }}
                              >
                                Coupan Code
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Status: activate to sort column ascending"
                                style={{ width: "157.781px" }}
                              >
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {plans.map((plan, index) => (
                              <tr
                                key={index}
                                role="row"
                                className={index % 2 === 0 ? "even" : "odd"}
                              >
                                <td className="sorting_1">
                                  {plan.serviceName}
                                </td>
                                <td>
                                  {plan.image && (
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={URL.createObjectURL(plan.image)}
                                      alt="Service"
                                      style={{ width: "50px", height: "50px" }}
                                    />
                                  )}
                                </td>
                                <td>{plan.details}</td>
                                <td>{plan.offer}</td>
                                <td>{plan.coupanCode}</td>
                                <td>
                                  <div className="status-toggle">
                                    <input
                                      type="checkbox"
                                      id={`status_${index}`}
                                      className="check"
                                      checked={plan.status}
                                      onChange={() => handleStatusChange(index)}
                                    />
                                    <label
                                      htmlFor={`status_${index}`}
                                      className="checktoggle"
                                    >
                                      checkbox
                                    </label>
                                  </div>
                                </td>
                              </tr>
                            ))}
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
