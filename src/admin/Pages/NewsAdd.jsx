import React, { useState } from "react";
import { Base_Url } from "../../BaseUrl";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewsAdd = () => {
  const navigate = useNavigate();
  const AddNews = (e) => {
    e.preventDefault();
    const news = e.target.news.value;
    const newsLink = e.target.newsLink.value;
    const data = { news, newsLink };
    axios
      .post(Base_Url + "/news", data)
      .then((response) => {
        console.log(response.data);
        e.target.reset();
        if (response.data.success === true) {
          navigate("/admin/news");
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
          <h1>News Add</h1>
          <form onSubmit={AddNews}>
            <div>
              <label>News Name :- </label>
              <input
                type="text"
                className="form-control w-75"
                id="news"
              ></input>
            </div>
            <div>
              <label>News Link :- </label>
              <input
                type="text"
                className="form-control w-75"
                id="newsLink"
              ></input>
            </div>
            <button
              className="py-2 px-4 rounded mt-3"
              style={{ background: "blue", color: "white " }}
              type="submit"
            >
              Add News
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsAdd;
