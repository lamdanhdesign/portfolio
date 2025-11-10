import React, { useState } from "react";
import "../styles/graphic-design.scss";

import mobile from "../assets/images/graphic-design/images1.png";
import Mobile_1 from "../assets/images/graphic-design/images2.png";
import Mobile_2 from "../assets/images/graphic-design/images3.png";
import Mobile_3 from "../assets/images/graphic-design/images4.png";
import mobile_4 from "../assets/images/graphic-design/images5.png";
import Mobile_5 from "../assets/images/graphic-design/images6.png";
import Mobile_6 from "../assets/images/graphic-design/images7.png";
import Mobile_7 from "../assets/images/graphic-design/images8.png";
import Mobile_8 from "../assets/images/graphic-design/images9.png";
import Mobile_9 from "../assets/images/graphic-design/images10.png";
import Mobile_10 from "../assets/images/graphic-design/images11.png";
import Mobile_11 from "../assets/images/graphic-design/images12.png";
import Mobile_12 from "../assets/images/graphic-design/images13.png";
import Mobile_13 from "../assets/images/graphic-design/images14.png";
import Mobile_14 from "../assets/images/graphic-design/images15.png";
import backgroundBot from "../assets/images/backroundBotRoket.png";
import hanhTinh from "../assets/images/2569567-04 1.png";

const GraphicDesSection = () => {
  const [activeKey, setActiveKey] = useState("Poster");

  // 💡 Mỗi key có layout JSX riêng
  const sections = {
    Poster: (
      <div className="image-mobile poster-layout">
        <img src={mobile} alt="Poster mockup" className="poster-main" />
        <img src={Mobile_1} alt="Poster mockup" className="poster-sub1" />
        <img src={Mobile_2} alt="Poster mockup" className="poster-sub2" />
      </div>
    ),
    Logo: (
      <div className="image-mobile logo-layout">
        <img src={Mobile_3} alt="Logo" className="logo-item-1" />
        <img src={mobile_4} alt="Logo" className="logo-item-2" />
        <img src={Mobile_5} alt="Logo" className="logo-item-3" />
      </div>
    ),
    Social: (
      <div className="image-mobile social-layout">
        {" "}
        <img src={Mobile_6} alt="Social" className="social-1" />
        <img src={Mobile_7} alt="Social" className="social-2" />
        <img src={Mobile_8} alt="Social" className="social-3" />
      </div>
    ),
    "Nhận diện thương hiệu": (
      <div className="image-mobile branding-layout">
        <img src={Mobile_9} alt="Branding" className="branding-item" />
        <img src={Mobile_10} alt="Branding" className="branding-item" />
        <img src={Mobile_11} alt="Branding" className="branding-item" />
        <img src={Mobile_12} alt="Branding" className="branding-item" />
        <img src={Mobile_13} alt="Branding" className="branding-item" />
        <img src={Mobile_14} alt="Branding" className="branding-item" />
      </div>
    ),
  };

  return (
    <section className="graphic-design-section">
      <div className="background-1"></div>
      <div className="content">
        <div className="content-title">
          <div className="wrap-title">
            <h2 className="title">Graphic</h2>
            <p className="subtitle">design</p>

            {/* Menu Slog */}
            <div className="title-slog">
              {Object.keys(sections).map((key) => (
                <p
                  key={key}
                  className={`slog ${activeKey === key ? "active" : ""}`}
                  onClick={() => setActiveKey(key)}
                >
                  {key}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Hiển thị layout tương ứng */}
        <div className="content-images"> {sections[activeKey]}</div>

        <div className="background-bot">
          <img src={backgroundBot} alt="" />
          <div className="image-hanh-tinh">
            <img src={hanhTinh} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesSection;
