import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Base_Url } from "../../BaseUrl";
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
const Notification = () => {
  const [notification, SetNotification] = useState([]);
  const [notificationId, SetNotificationId] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  useEffect(() => {
    axios
      .get(Base_Url + "notification")
      .then((response) => SetNotification(response.data.Notification));
  }, []);
  const NewsDelete = (e) => {
    e.preventDefault();
    axios
      .delete(Base_Url + `notification/${notificationId}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.success === true) {
          handleClose();
          axios
            .get(Base_Url + "notification")
            .then((response) => SetNotification(response.data.Notification));
        }
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Header />
      <section>
        <div className="container mt-5">
          <div className="d-flex justify-content-space-between align-items-center">
            <h1>Notification</h1>
            <Link
              to="/admin/NotificationAdd"
              className="btn-primary text-decoration-none py-2 px-4 rounded"
            >
              Add New Notification
            </Link>
          </div>
          <table class="table mt-4">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col" style={{ width: "600px" }}>
                  Notification Name
                </th>
                <th scope="col">Notification Link</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {console.log(notification)}
              {notification.map((row, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td style={{ width: "600px" }}>{row.notification}</td>
                  <td>{row.notificationLink}</td>
                  <td>
                    <div className="d-flex gap-3">
                      <form onSubmit={handleShow}>
                        {" "}
                        <button
                          className="text-danger"
                          type="submit"
                          onClick={() => SetNotificationId(row._id)}
                          style={{ fontSize: "20px" }}
                        >
                          <MdDelete />
                        </button>
                      </form>

                      <Link
                        to={`/admin/notificationEdit/${row._id}`}
                        style={{ fontSize: "20px" }}
                      >
                        <MdOutlineModeEditOutline />
                      </Link>
                      <Link
                        to={`/admin/notificationView/${row._id}`}
                        style={{ fontSize: "25px" }}
                      >
                        <GrFormView />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="py-2 px-3">Delete News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="danger" className="mr-3" onClick={NewsDelete}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Notification;
