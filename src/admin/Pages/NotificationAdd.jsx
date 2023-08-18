import React, { useState } from "react";
import { Base_Url } from "../../BaseUrl";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NotificationAdd = () => {
  const navigate = useNavigate();
  const AddNews = (e) => {
    e.preventDefault();
    const notification = e.target.notification.value;
    const notificationLink = e.target.notificationLink.value;
    const data = { notification, notificationLink };
    axios
      .post(Base_Url + "Newnotification", data)
      .then((response) => {
        console.log(response.data);
        e.target.reset();
        if (response.data.success === true) {
          navigate("/admin/notification");
        }
        toast.success(response.message);
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
          <h1>Notification Add</h1>
          <form onSubmit={AddNews}>
            <div>
              <label>Notification Name :- </label>
              <input
                type="text"
                className="form-control w-75"
                id="notification"
              ></input>
            </div>
            <div>
              <label>Notification Link :- </label>
              <input
                type="text"
                className="form-control w-75"
                id="notificationLink"
              ></input>
            </div>
            <button
              className="py-2 px-4 rounded mt-3"
              style={{ background: "blue", color: "white " }}
              type="submit"
            >
              Add Notification
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NotificationAdd;
