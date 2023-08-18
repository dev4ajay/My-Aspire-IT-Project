import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { Base_Url } from "../../BaseUrl";
const NewsView = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Base_Url + "news");
        const json = await response.json();
        console.log(json);
        const dev = json.News.filter((elm) => elm._id == id);
        setData(dev);
      } catch (error) {}
    };
    fetchData();
  }, []);
 
  return (
    <div>
      <Header />
      <div className="container mt-5 py-4 px-3">
        {data.map((row) => (
          <div className="shadow py-4 px-3">
            <h1>News View</h1>
            <h5>
              <b>News:-</b>
              {row.news}
            </h5>
            <h5 className="mb-3">
              <b>News Link:- </b>
              {row.newsLink}
            </h5>
            <Link
              className="btn-primary text-decoration-none py-2 px-3 rounded "
              to="/admin/news"
            >
              Back
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsView;
