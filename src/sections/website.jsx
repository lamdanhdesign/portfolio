import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/website.scss";

// import mobile from "../assets/images/a1.png";
// import Mobile_1 from "../assets/images/a2.png";
// import Mobile_2 from "../assets/images/a3.png";
// import Mobile_3 from "../assets/images/a4.png";
// import mobile_4 from "../assets/images/a5.png";
// import Mobile_5 from "../assets/images/a6.png";
// import backgroundBot from "../assets/images/bot-2.svg";
// import backgroundBotGreen from "../assets/images/bot-2.svg";

import mobile from "../assets/images/web_1.png";
import Mobile_1 from "../assets/images/web_2.png";
import Mobile_2 from "../assets/images/web_3.png";
import Mobile_3 from "../assets/images/web_4.png";
import mobile_4 from "../assets/images/web_5.png";
import Mobile_5 from "../assets/images/web_6.png";
import backgroundBot from "../assets/images/Vector-organe.png";
import backgroundBotGreen from "../assets/images/bot-2green.png";
import backgroundTim from "../assets/images/bot-2.svg";
const WebsiteSection = () => {
  const [isUser, setIsUser] = useState(true);

  const [activeGroup, setActiveGroup] = useState("xe"); // mặc định nhóm đầu

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    // Nếu slide đang ở 0–2 → Website đặt xe, còn 3–5 → Website E-commerce
    if (index <= 2) {
      setActiveGroup("xe");
    } else {
      setActiveGroup("ecommerce");
    }
  };

  const images = [Mobile_1, mobile, Mobile_2, Mobile_3, mobile_4, Mobile_5];

  return (
    <section className="website-section">
      {" "}
      {/* <div className="background"></div> */}
      <div className="background-ellipse"></div>
      <div className="background-1"></div>
      <div className="content">
        <div className="content-title">
          <div className="wrap-title">
            {" "}
            <div className="title">
              <p className="p_1">Website</p> <p className="p_2">design</p>
            </div>
            {isUser ? (
              <>
                <p className="subtitle">Cầu nối giữa Ứng dụng và Cộng đồng</p>
                <p className="desc">
                  Website được thiết kế trực quan, đóng vai trò là{" "}
                  <span>cổng thông tin chính</span>, cung cấp{" "}
                  <span>hướng dẫn sử dụng</span>
                  toàn diện và tối ưu hóa trải nghiệm{" "}
                  <span>đăng ký đối tác.</span>
                </p>
              </>
            ) : (
              <>
                <p className="subtitle-2">
                  Website E-commerce: Kiến tạo Trải nghiệm Mua sắm Trực tuyến
                </p>
                <p className="desc-2">
                  Thiết kế website với <span>giao diện trực quan,</span> tập
                  trung vào <span>bày trí sản phẩm</span> thông minh và{" "}
                  <span>tối ưu hóa luồng mua sắm</span> để nâng cao trải nghiệm
                  "đi chợ" trực tuyến.
                </p>
              </>
            )}
          </div>
        </div>
        {/* 
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          className="website-swiper"
        >
          <SwiperSlide>
            <div className="image-mobile">
              <img
                src={mobile}
                alt="App mockup"
                className="image-mobile-center"
              />
              <img src={Mobile_1} alt="App mockup" className="image-mobile-1" />
              <img src={Mobile_2} alt="App mockup" className="image-mobile-2" />
            </div>
            <div className="background-bot">
              <img src={backgroundBot} alt="" />
              <span>Website đặt xe</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image-mobile-2">
              <img src={Mobile_3} alt="App mockup" className="image-mobile-3" />
              <img
                src={mobile_4}
                alt="App mockup"
                className="image-mobile-center"
              />
              <img src={Mobile_5} alt="App mockup" className="image-mobile-1" />
            </div>
            <div className="background-bot">
              <img src={backgroundBotGreen} alt="" />
              <span>Website E-commerce</span>
            </div>
          </SwiperSlide>
        </Swiper> */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          onSlideChange={handleSlideChange}
          className="website-swiper"
        >
          {images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img src={imgSrc} alt={`App ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hiển thị background tương ứng */}
        {activeGroup === "xe" ? (
          <div className="background-bot">
            <img src={backgroundTim} alt="" />
            <span>Website đặt xe</span>
          </div>
        ) : (
          <div className="background-bot">
            <img src={backgroundTim} alt="" />
            <span>Website E-commerce</span>
          </div>
        )}
        {/* Navigation buttons */}
        <div className="swiper-button-prev custom-nav-btn">{""}</div>
        <div className="swiper-button-next custom-nav-btn">{""}</div>
      </div>
    </section>
  );
};

export default WebsiteSection;
