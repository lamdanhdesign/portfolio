import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/website.scss";

import mobile from "../assets/images/web_1.png";
import Mobile_1 from "../assets/images/web_2.png";
import Mobile_2 from "../assets/images/web_3.png";
import Mobile_3 from "../assets/images/web_4.png";
import mobile_4 from "../assets/images/web_5.png";
import Mobile_5 from "../assets/images/web_6.png";
import backgroundBot from "../assets/images/Vector-organe.png";
import backgroundBotGreen from "../assets/images/bot-2green.png";

const WebsiteSection = () => {
  const [isUser, setIsUser] = useState(true);

  const handleSlideChange = (swiper) => {
    // Nếu đang ở slide 0 => user view, slide 1 => ecommerce view
    setIsUser(swiper.activeIndex === 0);
  };

  return (
    <section className="website-section">
      <div className="background-1"></div>
      <div className="content">
        <div className="content-title">
          <div className="wrap-title">
            {" "}
            <h2 className="title">Web Design</h2>
            {isUser ? (
              <>
                <p className="subtitle">Cầu nối giữa Ứng dụng và Cộng đồng</p>
                <p className="desc">
                  Website được thiết kế trực quan, đóng vai trò là cổng thông
                  tin chính, cung cấp hướng dẫn sử dụng toàn diện và tối ưu hóa
                  trải nghiệm đăng ký đối tác.
                </p>
              </>
            ) : (
              <>
                <p className="subtitle-2">
                  Website E-commerce: Kiến tạo Trải nghiệm Mua sắm Trực tuyến
                </p>
                <p className="desc-2">
                  Thiết kế website với giao diện trực quan, tập trung vào bày
                  trí sản phẩm thông minh và tối ưu hóa luồng mua sắm để nâng
                  cao trải nghiệm "đi chợ" trực tuyến.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Swiper */}
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
          {/* Slide 1: User */}
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

          {/* Slide 2: E-commerce */}
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
        </Swiper>

        {/* Navigation buttons */}
        <div className="swiper-button-prev custom-nav-btn">{""}</div>
        <div className="swiper-button-next custom-nav-btn">{""}</div>
      </div>
    </section>
  );
};

export default WebsiteSection;
