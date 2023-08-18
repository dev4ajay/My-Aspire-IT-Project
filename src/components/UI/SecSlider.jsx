import React, { useState, useEffect } from "react";
import FirstImage from "../../Assets/img/small-slider-1.jpg";
import SecondImage from "../../Assets/img/small-slider-2.jpg";
import { BiChevronsRight } from "react-icons/bi";
import new_icon_blink from "../../Assets/img/new_icon_blink.gif";
import { Base_Url } from "../../BaseUrl";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
const SecSlider = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const [NewsPrint, setNewsPrint] = useState({});
  // const [data, setData] = useState([]);

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(Base_Url + "notification")
      .then((response) => setData(response.data.Notification));
  }, []);
  const fetchData2 = () => {
    return fetch(Base_Url + "news")
      .then((response) => response.json())
      .then((data) => setNewsPrint(data.News));
  };
  useEffect(() => {
    fetchData2();
  }, []);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      id: 1,
      tabTitle: "NOTIFICATION",
      title: "Title 1",
    },
    {
      id: 2,
      tabTitle: "RESULTS",
      title: "Title 2",
      content: [
        {
          line1: "Download CBSE Class X & XII Exam Date Sheet 2022-23 ",
          line2:
            "Download CBSE Class X & XII Exam Date Sheet 2022-23 NEET Target Courses NEET Crash Courses NEET Test Series KVPY",
          line3: "Download CBSE Class X & XII Exam Date Sheet 2022-23",
        },
      ],
    },
  ];
  console.log(tabs);
  return (
    <section className="mt-1">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div
              id="carousel-example-1z"
              class="carousel slide carousel-fade"
              data-ride="carousel"
              data-interval="3000"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carousel-example-1z"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
              </ol>

              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src={FirstImage}
                    alt="First slide"
                  />
                </div>

                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={SecondImage}
                    alt="Second slide"
                  />
                </div>
              </div>

              <a
                class="carousel-control-prev"
                href="#carousel-example-1z"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousel-example-1z"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-4 mt-3 p-0 border kum">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    className="tabs"
                  >
                    <Tab label="NOTIFICATION" value="1" />
                    <Tab label="NEWS" value="2" />
                  </TabList>
                </Box>
                <TabPanel className="content pb-1" value="1">
                  {" "}
                  <div>
                    {/* {currentTab === `${tab.id}` && ( */}

                    <div>
                      {" "}
                      {Object.keys(data).map((id, index) => {
                        return (
                          <tr key={id}>
                            <hr className="m-0" />
                            <div className="d-flex mt-2 mb-2">
                              <BiChevronsRight style={{ fontSize: "25px" }} />{" "}
                              <Link
                                className="text-decoration-none text-black "
                                style={{ lineHeight: "22px" }}
                                to={data[id].notificationLink}
                              >
                                {data[id].notification}
                              </Link>
                            </div>
                          </tr>
                        );
                      })}
                    </div>
                    {/* )} */}
                  </div>
                </TabPanel>
                <TabPanel className="content pb-1" value="2">
                  <div>
                    {/* {currentTab === `${tab.id}` && ( */}

                    <div>
                      {" "}
                      {Object.keys(NewsPrint).map((id, index) => {
                        return (
                          <tr key={id}>
                            <hr className="m-0" />
                            <div className="d-flex mt-2 mb-2">
                              <BiChevronsRight style={{ fontSize: "25px" }} />{" "}
                              <Link
                                className="text-decoration-none text-black "
                                style={{ lineHeight: "22px" }}
                                to={NewsPrint[id].newsLink}
                              >
                                {NewsPrint[id].news}
                              </Link>
                            </div>
                          </tr>
                        );
                      })}
                    </div>
                    {/* )} */}
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecSlider;
