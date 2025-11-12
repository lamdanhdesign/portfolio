import React from "react";
import "../styles/merchant.scss";
import mobile from "../assets/images/merchant 01-01.png";
import mobile_2 from "../assets/images/merchant 02-01 - Copy.png";
import childMobile_1 from "../assets/images/f81b217a702e0ab84d2c0503a7c93a997ab701cc.png";
import childMobile_2 from "../assets/images/c0ee4523ac2cf4c73f1fe25a0fa4d5819528dbf0.png";
import childMobile_3 from "../assets/images/9fdbe0eef77cc84e646e57dfd1d0501c3b9dca04.png";
import backgroundBot from "../assets/images/bot.png";
import phiHanhGia from "../assets/images/mobile-app-section/CUTE_ASTRONOUT-02.png";
import leftArrow from "../assets/images/mobile-app-section/9d399455e8c0e5fc8b46de6832cd92f3ec3d2487.gif";
import { motion } from "motion/react";
const MerchantSection = () => {
  //
  return (
    <>
      {" "}
      <section className="mobile-app-section">
        {" "}
        <div className="background"></div>
        <div className="background-1"></div>
        <div className="content">
          <div className="title">
            <p className="p_1">Mobile</p> <p className="p_2">app design</p>
          </div>
          <p className="subtitle">
            Tối ưu hóa quy trình vận hành cửa hàng bằng nền tảng di động.
          </p>
          <p className="desc">
            Thiết kế giao diện trực quan, cho phép{" "}
            <span>
              quản lý toàn diện thực đơn, theo dõi và xử lý đơn hàng liên mạch
            </span>{" "}
            ,tăng tốc độ vận hành và giảm thiểu sai sót.
          </p>{" "}
          <div className="image-mobile">
            <div className="image-mobile-background"></div>
            <img
              src={mobile}
              alt="App mockup"
              className="image-mobile-center"
            />
            <img
              src={childMobile_1}
              alt="App mockup"
              className="image-mobile-1"
            />
            <img
              src={childMobile_3}
              alt="App mockup"
              className="image-mobile-2"
            />{" "}
            <img
              src={childMobile_2}
              alt="App mockup"
              className="image-mobile-3"
            />
          </div>{" "}
          <div className="background-bot">
            <img src={backgroundBot} alt="" />
            <span>Merchant App</span>
          </div>
        </div>
      </section>{" "}
      <section className="mobile-app-section-2">
        {" "}
        <div className="background"></div>
        <div className="background-1"></div>
        <div className="content">
          <div className="image-mobile">
            <div className="image-mobile-background"></div>
            <img
              src={mobile}
              alt="App mockup"
              className="image-mobile-center"
            />{" "}
            <img
              src={mobile_2}
              alt="App mockup"
              className="image-mobile-center-2"
            />
          </div>{" "}
          <div className="content-wrap">
            <div className="background-bot">
              <img src={backgroundBot} alt="" />
              <span>Merchant App</span>
            </div>
            <div className="content-text">
              <li>
                Quản lý Đơn hàng Liền mạch:
                <span>
                  {" "}
                  Dễ dàng theo dõi trạng thái, tiếp nhận và xử lý đơn hàng chỉ
                  với vài thao tác.
                </span>
              </li>
            </div>
            <div className="content-text">
              <li>
                Chi tiết Đơn Hàng Chính xác:
                <span>
                  {" "}
                  Mỗi đơn hàng hiển thị đầy đủ thông tin chi tiết về sản phẩm,
                  số lượng và yêu cầu đặc biệt.
                </span>
              </li>
            </div>
            <div className="content-text">
              <li>
                Quy trình Xử lý Rõ ràng:
                <span>
                  {" "}
                  Phân loại và phân luồng các bước chuẩn bị đơn hàng.
                </span>
              </li>
            </div>
            <div className="content-text">
              <li>
                Báo cáo Hiệu suất Thời gian thực:
                <span>
                  {" "}
                  Cập nhật tức thì các chỉ số quan trọng như doanh thu, số lượng
                  đơn hàng.
                </span>
              </li>
            </div>{" "}
          </div>
        </div>{" "}
        <div className="background-arrow">
          <img src={leftArrow} alt="" />
          <img src={leftArrow} alt="" />
          <img src={leftArrow} alt="" />
          <img src={leftArrow} alt="" />
        </div>{" "}
        <img className="background-phi-hanh-gia" src={phiHanhGia} alt="" />
      </section>{" "}
    </>
  );
};

export default MerchantSection;
