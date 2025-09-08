import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { getUsersUrl, imagePath } from "../../helpers/urls";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { fetchById } from "../../helpers/actions";

export default function ClientComponent() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetchById(getUsersUrl);
      if (response.status) {
        setData(response.data);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went weong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">List of Client</h3>
            </div>
          </div>
        </div>

        {loading ? (
          <CircularProgress />
        ) : (
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
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
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="DataTables_Table_0"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Patient Name: activate to sort column ascending"
                                    style={{ width: "240.266px" }}
                                  >
                                    Name/Email
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="DataTables_Table_0"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Age: activate to sort column ascending"
                                    style={{ width: "25.1094px" }}
                                  >
                                    Age
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="DataTables_Table_0"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Address: activate to sort column ascending"
                                    style={{ width: "120px" }}
                                  >
                                    Phone
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="DataTables_Table_0"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Phone: activate to sort column ascending"
                                    style={{ width: "57.5312px" }}
                                  >
                                    Gender
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="DataTables_Table_0"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Phone: activate to sort column ascending"
                                    style={{ width: "57.5312px" }}
                                  >
                                    Dob
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="DataTables_Table_0"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Last Visit: activate to sort column ascending"
                                    style={{ width: "61.4531px" }}
                                  >
                                    Is Online
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {data &&
                                  data.length > 0 &&
                                  data.map((user) => {
                                    return (
                                      <tr role="row" className="odd" key={user._id}>
                                        <td>
                                          <h2 className="table-avatar">
                                            <a
                                              href="profile.html"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={`${imagePath}/${user.profile}`}
                                                alt="User Image"
                                              />
                                            </a>

                                            <div
                                              style={{
                                                display: "inline-block",
                                              }}
                                            >
                                              <h2 className="table-avatar">
                                                <a href="/details">{user.name} </a>
                                              </h2>
                                              <p>{user.email}</p>
                                            </div>
                                          </h2>
                                        </td>
                                        <td>{user.phone}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.is_online}</td>
                                      </tr>
                                    );
                                  })}
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
        )}
      </div>
    </>
  );
}
