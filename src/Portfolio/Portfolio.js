import React, { useState } from "react";
import "./Portfolio.css";
import axios from "axios";
import Marquee from "react-fast-marquee";

const Portfolio = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  const { fullname, email, phone } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if ((fullname !== "") & (phone !== "") & (email !== "")) {
      axios
        .post(
          "https://portfolio-2d9b3-default-rtdb.firebaseio.com/portfolio.json",
          data
        )
        .then(() => alert("Submitted Successfully"));
    }
  };

  return (
    <>
      <div className="hero pb-3">
        <nav className="navbar navbar-expand-lg navbar-dark   pt-3">
          <a className="navbar-brand pl-5" href="#foodWithLove">
            <h2 className="logo">
              Portfo<span>lio</span>
            </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item ">
                <a className="nav-link" id="navItem1" href="##">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="navItem2" href="#About-section">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="navItem3" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="navItem4" href="#contact-me">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container main-hypen" id="Home">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h4>Hello, My Name is</h4>
                <h1>
                  {" "}
                  <span> Dinesh Babu</span>
                </h1>
                <h3>I'am a Web Developer.</h3>
                <div className="newslatter">
                  <form>
                    <input
                      type="email"
                      name="email"
                      id="mail"
                      placeholder="Enter Your Email"
                    />
                    <input
                      type="submit"
                      name="submit"
                      id="onClick"
                      value="Let's Start"
                      href="footer"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* About Us  */}
      <div>
        <div className="pt-5 about text-center" id="About-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img
                  src="1661776979349.jpg"
                  alt=""
                  className="image-style w-75"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="about-text pt-3">
                  <h2>About Me</h2>
                  <h5>
                    Developer <span>& Designer</span>
                  </h5>
                  <p>
                    I am a web developer. I can provide clean code and pixel
                    perfect design. I also make the website more interactive
                    with web animations. A responsive design makes your website
                    accessible to all users, regardless of their device.
                  </p>
                  <button className="my-button" href="#contact-me">
                    {" "}
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* my skills   */}

        <div className="pt-2 contact-me pb-5 shadow-lg" id="skill">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center pb-5">
                <h1 className="title">My Skills </h1>
              </div>
              <div className="col-12">
                <div className=" text-center">
                  <Marquee className="scrol">
                    <img
                      className="sizing"
                      src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
                      alt=""
                    />

                    <img
                      className="sizing ezlsd"
                      src="http://x7d4c5z5.stackpathcdn.com/wp-content/uploads/2014/10/css3.jpg"
                      alt=""
                    />

                    <img
                      className="sizing"
                      src="https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg"
                      alt=""
                    />

                    <img
                      className="sizing"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrC1wJORhjBI7hHmCBJWBwinpnjfVwxlyvlwIhIWKTpdn1X62aOD6U6VUUoCn1k7YhZM&usqp=CAU"
                      alt=""
                    />
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hire me */}

        <div className="pt-5 contact-me pb-5 shadow-lg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className=" text-center">
                  <p>Let Me Get You A Beautiful Website.</p>
                  <a className="button-two" href="##">
                    Ping Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* footer */}
        <div className="foot-section" id="contact-me">
          <div className="container">
            <div className="row">
              <div className="col-12 pb-5">
                <h1 className="display-2" id="contact-me">
                  {" "}
                  CONTACT{" "}
                </h1>
                <p className="paragraph-2"> chirala, Andhrapradesh, India </p>
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      name="fullname"
                      placeholder="Name"
                      onChange={changeHandler}
                      value={fullname}
                      required
                    />{" "}
                    <br />
                    <input
                      type="number"
                      className="form-control"
                      id="Phone"
                      name="phone"
                      placeholder="Phone"
                      onChange={changeHandler}
                      value={phone}
                      required
                    />{" "}
                    <br />
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      name="email"
                      placeholder="Email"
                      onChange={changeHandler}
                      value={email}
                      required
                    />{" "}
                    <br />
                  </div>
                  <button className="contact-button" onClick={submitHandler}>
                    {" "}
                    Contact Me{" "}
                  </button>
                </form>
                <h1 className="footerheading text-center pt-3 pb-2">
                  Created by <span className="specialname">Dinesh Babu</span> |
                  all rights reserved...!
                </h1>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="foot-section">
          <div className="footer-container">
          <div className="left-side">
            <h3 className="head"> My Goal ⚽️</h3>
            <p className="paragraph">
              Pursuing a Job Opportunity in a Competitive environment that will
              challenge me to push my boundaries and expand my knowledge in the
              field of web development.
            </p>
            <div className="social">
              <svg
                className="instagram"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
              <svg
                className="twitter"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
              <svg
                className="linkedin"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </div>
          </div>
          <div class="rightSide">
            <div class="location">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
              </svg>
              <div>
                <p className="all">Chirala,Andhra Pradesh</p>
              </div>
            </div>
            <div class="phone">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
              </svg>
              <div>
                <p className="all">9642189443 </p>
              </div>
            </div>
            <div class="email">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path>
              </svg>
              <div>
                <p className="all">avvarudineshbabu3@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
