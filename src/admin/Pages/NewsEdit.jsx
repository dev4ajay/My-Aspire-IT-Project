import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { Base_Url } from "../../BaseUrl";
import axios from "axios";
import { toast } from "react-toastify";
const NewsEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [newsLink, setNewsLink] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Base_Url + "news");
        const json = await response.json();
        console.log(json);
        const dev = json.News.filter((elm) => elm._id == id);
        setNews(dev[0].news);
        setNewsLink(dev[0].newsLink);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const AddNews = (e) => {
    e.preventDefault();
    const news = e.target.news.value;
    const newsLink = e.target.newsLink.value;
    const data = { news, newsLink };
    axios
      .put(Base_Url + `/news/${id}`, data)
      .then((response) => {
        console.log(response.data);
        e.target.reset();
        if (response.data.success === true) {
          navigate("/admin/news");
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
          <h1>News Edit</h1>
          <form onSubmit={AddNews}>
            <div>
              <label>News Name :- </label>
              <input
                type="text"
                className="form-control w-75"
                id="news"
                defaultValue={news}
              ></input>
            </div>
            <div>
              <label>News Link :- </label>
              <input
                type="text"
                className="form-control w-75"
                id="newsLink"
                defaultValue={newsLink}
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

export default NewsEdit;
