import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { Base_Url } from "../../BaseUrl";
import axios from "axios";
import { toast } from "react-toastify";
const NotificationEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notification, setnotification] = useState([]);
  const [notificationLink, setNotificationLink] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Base_Url + "notification");
        const json = await response.json();
        console.log(json);
        console.log("mmmm>>>>", json);
        const dev = json.Notification.filter((elm) => elm._id == id);
        setnotification(dev[0].notification);
        setNotificationLink(dev[0].notificationLink);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const AddNews = (e) => {
    e.preventDefault();
    const notification = e.target.notification.value;
    const notificationLink = e.target.notificationLink.value;
    const data = { notification, notificationLink };
    axios
      .put(Base_Url + `notification/${id}`, data)
      .then((response) => {
        console.log(response.data);
        e.target.reset();
        if (response.data.success === true) {
          navigate("/admin/notification");
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
          <h1>Notification Edit</h1>
          <form onSubmit={AddNews}>
            <div>
              <label>Notification Name :- </label>
              <input
                type="text"
                className="form-control w-75"
                id="notification"
                defaultValue={notification}
              ></input>
            </div>
            <div>
              <label>Notification Link :- </label>
              <input
                type="text"
                className="form-control w-75"
                id="notificationLink"
                defaultValue={notificationLink}
              ></input>
            </div>
            <button
              type="submit"
              className="py-2 px-4 rounded mt-3"
              style={{ background: "blue", color: "white " }}
            >
              Add News
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NotificationEdit;
