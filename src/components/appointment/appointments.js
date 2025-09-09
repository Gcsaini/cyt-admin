import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useEffect } from "react";
import {
getBookings,
imagePath
} from "../../helpers/urls";
import { fetchById } from "../../helpers/actions";
import {formatDate,formatDateTime,formatTime} from "../../helpers/times.js"
import { toast } from "react-toastify";
import PaymentStatusWidget from "./paymentStatus.js";
export default function Appointments() {
 const [data, setData] = React.useState([]); 
 const [paymentStatus, setPaymentStatus] = React.useState([]); 
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

    const getData = async () => {
    try {
      const response = await fetchById(getBookings);
      if (response.status) {
        setData(response.data);
        setPaymentStatus(response.statuslist);

        toast.success(response.message);
      } else {
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went weong");
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
                                Therapist Name
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
                                Service
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
                                User
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
                                aria-label="Status: activate to sort column ascending"
                                style={{ width: "54.8281px" }}
                              >
                                Payment Status
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
                            {data && data.map((item)=>{
                             return <tr role="row" className="odd" key={item._id}>
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <a
                                    href=""
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={`${imagePath}/${item.therapist.user.profile}`}
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="#">{item.therapist.user.name}</a>
                                  <br/>
                                 
                                </h2>
                              </td>
                              <td> {item.therapist.profile_type}</td>
                              
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href=""
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={`${imagePath}/${item.client?.profile}`}
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="">{item.client?.name}</a>
                                </h2>
                              </td>
                              
                              <td>
                                {formatDate(item.booking_date)}{" "}
                                <span className="text-success d-block">
                                  {formatTime(item.booking_date)}
                                </span>
                              </td>
                              <td>
                                {item.status}
                              </td>
                              <td>
                                <PaymentStatusWidget item={item} statusList={paymentStatus}/>
                              </td>
                              <td>₹{item.transaction?.amount}</td>
                              
                            </tr>
                            })}
                          
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
