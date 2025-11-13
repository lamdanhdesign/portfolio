import React, { useState, useRef } from "react";
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
import backgroundTim from "../assets/images/bot-2.svg";

const WebsiteSection = () => {
  const [isUser, setIsUser] = useState(true);
  const [activeGroup, setActiveGroup] = useState("xe");
  const swiperRef = useRef(null); // Dùng để điều khiển Swiper

  const images = [Mobile_1, mobile, Mobile_2, Mobile_3, mobile_4, Mobile_5];

  // Xử lý khi click vào slide
  const handleSlideClick = (index) => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    // Xác định nhóm hiện tại
    const currentGroup = index <= 2 ? "xe" : "ecommerce";

    // Cập nhật nhóm
    setActiveGroup(currentGroup);

    // Tính toán slide index để đưa slide được click vào giữa
    let targetIndex;
    if (currentGroup === "xe") {
      // Nhóm xe: hiển thị 0,1,2 → active là index 0,1,2 → giữa là 1
      // Nhưng nếu click vào 0 → active=0 (giữa), 1 và 2 ở 2 bên
      // → activeIndex = index
      targetIndex = index;
    } else {
      // Nhóm ecommerce: hiển thị 3,4,5 → activeIndex từ 3 đến 5
      // activeIndex = 3 + (index - 3) = index
      targetIndex = index;
    }

    swiper.slideTo(targetIndex);
  };

  // Xử lý navigation buttons
  const handleNext = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;

    if (activeGroup === "xe") {
      // Từ nhóm xe → nhảy sang nhóm ecommerce, slide 4 ở giữa → activeIndex = 4
      swiper.slideTo(4);
      setActiveGroup("ecommerce");
    }
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;

    if (activeGroup === "ecommerce") {
      // Từ nhóm ecommerce → nhảy về nhóm xe, slide 1 ở giữa → activeIndex = 1
      swiper.slideTo(1);
      setActiveGroup("xe");
    }
  };

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    if (index <= 2) {
      setActiveGroup("xe");
    } else {
      setActiveGroup("ecommerce");
    }
  };

  return (
    <section className="website-section">
      <div className="background-ellipse"></div>
      <div className="background-1"></div>
      <div className="content">
        <div className="content-title">
          <div className="wrap-title">
            <div className="title">
              <p className="p_1">Website</p> <p className="p_2">design</p>
            </div>
            {activeGroup === "xe" ? (
              <>
                <p className="subtitle">Cầu nối giữa Ứng dụng và Cộng đồng</p>
                <p className="desc">
                  Website được thiết kế trực quan, đóng vai trò là{" "}
                  <span>cổng thông tin chính</span>, cung cấp{" "}
                  <span>hướng dẫn sử dụng</span> toàn diện và tối ưu hóa trải
                  nghiệm <span>đăng ký đối tác.</span>
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

        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={20}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={false} // Tắt navigation mặc định
          className="website-swiper"
          initialSlide={1} // Bắt đầu với slide 1 ở giữa (hiển thị 0-1-2)
          style={{ overflow: "visible" }}
        >
          {images.map((imgSrc, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleSlideClick(index)}
              style={{ cursor: "pointer" }}
            >
              <img src={imgSrc} alt={`App ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Background bot */}
        <div className="background-bot">
          <img src={backgroundTim} alt="" />
          <span>
            {activeGroup === "xe" ? "Website đặt xe" : "Website E-commerce"}
          </span>
        </div>

        {/* Custom Navigation */}
        <div
          className={`swiper-button-prev custom-nav-btn ${
            activeGroup === "xe" ? "hidden" : ""
          }`}
          onClick={handlePrev}
        ></div>
        <div
          className={`swiper-button-next custom-nav-btn ${
            activeGroup === "ecommerce" ? "hidden" : ""
          }`}
          onClick={handleNext}
        ></div>
      </div>
    </section>
  );
};

export default WebsiteSection;
