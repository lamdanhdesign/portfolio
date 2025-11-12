import React, { useState } from "react";
import "../styles/users-drive.scss";
import mobile from "../assets/images/monile_1.png";

import Mobile_1 from "../assets/images/monile_2.png";
import Mobile_2 from "../assets/images/monile_3.png";
import Mobile_3 from "../assets/images/monile_4.png";

//
import mobile_4 from "../assets/images/mobile_4.png";
import Mobile_5 from "../assets/images/mobile_5.png";
import Mobile_6 from "../assets/images/mobile_6.png";
import Mobile_7 from "../assets/images/mobile_7.png";
import backgroundBot from "../assets/images/bot-2.svg";

const UsersDriveSection = () => {
  const [isUser, setIsUser] = useState(true);

  const handleOnChange = (status) => {
    setIsUser(status);
  };

  return (
    <>
      {" "}
      <section className="users-drive-section">
        {" "}
        <div className="background-1"></div>
        <div className="content">
          <h2 className="title">Mobile App Giao hàng</h2>
          {isUser ? (
            <p className="desc">
              Ứng dụng giao hàng linh hoạt, hỗ trợ{" "}
              <span>giao đa điểm, theo dõi đơn hàng liên tục</span> và cam kết
              hiển thị <span>giá cước minh bạch</span> ngay từ đầu.
            </p>
          ) : (
            <p className="desc-2">
              Ứng dụng Tài xế được <span>thiết kế tối giản.</span> Đây là công
              cụ giúp tài xế{" "}
              <span>tiếp nhận đơn nhanh chóng, điều hướng tối ưu</span> và{" "}
              <span>theo dõi hiệu suất làm việc.</span>
            </p>
          )}
          <div className="content-btn">
            <button className="btn-user" onClick={() => handleOnChange(true)}>
              User
            </button>{" "}
            <button
              onClick={() => handleOnChange(false)}
              className="btn-driver"
            >
              Driver
            </button>
          </div>
          {isUser ? (
            <div className="image-mobile">
              {/* <div className="image-mobile-background"></div> */}
              <img
                src={mobile}
                alt="App mockup"
                className="image-mobile-center"
              />
              <img src={Mobile_1} alt="App mockup" className="image-mobile-1" />
              <img
                src={Mobile_2}
                alt="App mockup"
                className="image-mobile-2"
              />{" "}
              <img src={Mobile_3} alt="App mockup" className="image-mobile-3" />
            </div>
          ) : (
            <div className="image-mobile-layout-2">
              {/* <div className="image-mobile-background"></div> */}
              <img
                src={mobile_4}
                alt="App mockup"
                className="image-mobile-center"
              />
              <img src={Mobile_5} alt="App mockup" className="image-mobile-1" />
              <img
                src={Mobile_6}
                alt="App mockup"
                className="image-mobile-2"
              />{" "}
              <img src={Mobile_7} alt="App mockup" className="image-mobile-3" />
            </div>
          )}

          <div className="background-bot">
            <img src={backgroundBot} alt="" />
            <span>Ứng dụng đặt xe</span>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default UsersDriveSection;
