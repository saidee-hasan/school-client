import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";

const Home = () => {
  const images = [
    "https://i.ibb.co/sVJf4Yr/Whats-App-Image-2024-03-27-at-16-42-16-0c2e0516.jpg",
    "https://i.ibb.co/GT88WZ5/Whats-App-Image-2024-03-27-at-16-42-15-0be4ff39.jpg",
    "https://i.ibb.co/PZKFd2x/Whats-App-Image-2024-03-27-at-16-42-15-0d810fe9.jpg",
  ];

  
  return (
    <div className="twin-container">
      <div className="slide-container">
        <Slide>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[1]})` }}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[2]})` }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="notice-container box">
        <h2>Notice</h2>
        <marquee
          direction="up"
          height="300"
          scrollamount="5px"
          onmouseover="this.stop()"
          onmouseout="this.start()"
        >
          <ul>
            <li>
              <i class="lar la-arrow-alt-circle-right"></i>
              <a href="/">
                {" "}
                চিথুলিয়া দিগর মুহিয়ে সুন্নাহ আলিম মাদ্রাসা ম্যানেজিং কমিটি
                নির্বাচন/ ২০২৪ ইং{" "}
              </a>
            </li>
            <br />

            <li>
              <i class="lar la-arrow-alt-circle-right"></i>
              <a href="/">
                {" "}
                চিথুলিয়া দিগর মুহিয়ে সুন্নাহ আলিম মাদ্রাসা শূন্য পদে শিক্ষকদের
                চাহিদা পত্র{" "}
              </a>
            </li>
            <br />

            <li>
              <i class="lar la-arrow-alt-circle-right"></i>
              <a href="/"> চিথুলিয়া দিগর মুহিয়ে সুন্নাহ আলিম মাদ্রাসা</a>
            </li>
          </ul>
        </marquee>
      </div>
    </div>
  );
};

export default Home;
