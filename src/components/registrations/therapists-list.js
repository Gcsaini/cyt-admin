import React, { useEffect } from "react";
import {
  aprovedTherapist,
  getTherapists,
  sendAproveMail,
} from "../../helpers/urls";
import axios from "axios";
import { getMode } from "../../helpers/get-mode";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { truncateString } from "../../helpers/string-concate";
export default function TherapistLists() {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [loadingModal, setLoadingModal] = React.useState(false);
  const [loadingId, setLoadingId] = React.useState();
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [service, setSerice] = React.useState("");
  const handleOpen = (service) => {
    setSerice(service);
    setOpen(true);
  };

  const handleLoadingOpenModal = (service) => {
    setLoadingModal(true);
  };
  const handleClose = () => setOpen(false);
  const handleLoadingClose = () => setLoadingModal(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const getData = async () => {
    try {
      const response = await axios.get(getTherapists);
      if (response.data.status) {
        setData(response.data.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendMail = async (id) => {
    try {
      setLoading(true);
      setLoadingId(id);
      const response = await axios.get(`${sendAproveMail}/${id}`);
      if (response.data.status) {
        setSuccess("Mail has been sent");
      } else {
        setError("Error to send mail.Please contact your CTO");
      }
    } catch (error) {
      setError(`${error.response.data.message}.Please contact your CTO`);
    }
    setLoading(false);
  };

  const aproveProfile = async (id) => {
    try {
      handleLoadingOpenModal(true);
      const response = await axios.get(`${aprovedTherapist}/${id}`);
      if (response.data.status) {
        setSuccess("Profile aproved");
      } else {
        setError("Error to aproved Account.Please contact your CTO");
      }
    } catch (error) {
      setError(`${error.response.data.message}.Please contact your CTO`);
    }
    handleLoadingClose(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">List of Therapists</h3>
              <span style={{ color: "#dc3545" }}>{error}</span>
              <span style={{ color: "#28a745" }}>{success}</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>

                          <th>Phone</th>
                          <th>Serve Type</th>
                          <th>Profile Type</th>
                          <th>Mode</th>
                          <th>Mail Sent?</th>
                          <th>Aproved?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.length > 0 &&
                          data.map((item) => {
                            return (
                              <tr key={item._id}>
                                <td>
                                  <h2 className="table-avatar">
                                    <a href="/details">{item.name} </a>
                                  </h2>
                                  <p>{item.email}</p>
                                </td>

                                <td>{item.phone}</td>
                                <td>
                                  <div
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleOpen(item.serve_type)}
                                  >
                                    {truncateString(item.serve_type)}
                                  </div>
                                </td>
                                <td>{item.profile_type}</td>
                                <td>{getMode(item.mode)}</td>
                                <td>
                                  <span
                                    style={{
                                      color:
                                        item.is_mail_sent === 1
                                          ? "#28a745"
                                          : "#dc3545",
                                    }}
                                  >
                                    {item.is_mail_sent === 1 ? "Sent" : "No"}
                                  </span>

                                  <div
                                    style={{ cursor: "pointer" }}
                                    onClick={() => sendMail(item._id)}
                                  >
                                    {loading && loadingId === item._id
                                      ? "Sending..."
                                      : "Send Mail"}
                                  </div>
                                </td>
                                <td>
                                  {item.is_aproved ? (
                                    <span className="badge rounded-pill bg-success inv-badge">
                                      Aproved
                                    </span>
                                  ) : (
                                    <div
                                      onClick={() => aproveProfile(item._id)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      <span className="badge rounded-pill bg-danger-light inv-badge">
                                        Aprove
                                      </span>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Service Type
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {service}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={loadingModal}
        onClose={handleLoadingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please wait....
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
