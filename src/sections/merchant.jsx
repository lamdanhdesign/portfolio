import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "../styles/merchant.scss";
import mobile from "../assets/images/merchant 01-01.png";
import mobile_2 from "../assets/images/merchant 02-01 - Copy.png";
import childMobile_1 from "../assets/images/f81b217a702e0ab84d2c0503a7c93a997ab701cc.png";
import childMobile_2 from "../assets/images/c0ee4523ac2cf4c73f1fe25a0fa4d5819528dbf0.png";
import childMobile_3 from "../assets/images/9fdbe0eef77cc84e646e57dfd1d0501c3b9dca04.png";
import backgroundBot from "../assets/images/bot.png";
import phiHanhGia from "../assets/images/mobile-app-section/CUTE_ASTRONOUT-02.png";
import leftArrow from "../assets/images/mobile-app-section/9d399455e8c0e5fc8b46de6832cd92f3ec3d2487.gif";

const MerchantSection = () => {
  const checkpointRef = useRef(null);
  const isInView = useInView(checkpointRef, { amount: 0.5, once: false });

  // Controls riêng cho từng nhóm
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const descControls = useAnimation();
  const listItemControls = useAnimation();
  const mainImagesControls = useAnimation();
  const mainImagesSection1Controls = useAnimation();
  const mainPopoupBackgroundSection1Controls = useAnimation(); // nền tím của section 1
  const backgroundImagesSection1Controls = useAnimation();
  const backgroundImagesSection2Controls = useAnimation();

  const childImagesControls = useAnimation();

  // Variants cho text content 1
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -80,
      transition: { duration: 0.5 },
    },
  };

  // Variants cho content 2 (các li)
  const listVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    if (isInView) {
      const isTablet = window.innerWidth <= 1024;

      // Khi scroll xuống → ẩn content 1, hiện content 2
      titleControls.start("exit");
      subtitleControls.start("exit");
      descControls.start("exit");

      listItemControls.start("visible");
      mainImagesControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
      mainImagesSection1Controls.start({
        opacity: 1,
        x: isTablet ? -359 : -440,
        y: -320,
        transition: { duration: 0.9, ease: "easeOut" },
      });
      mainPopoupBackgroundSection1Controls.start({
        opacity: 1,
        x: isTablet ? -240 : -440,
        y: -320,
        transition: { duration: 0.9, ease: "easeOut" },
      });
      backgroundImagesSection2Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
      backgroundImagesSection1Controls.start({
        opacity: 0,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
      // 3 ảnh con bay ra
      childImagesControls.start((i) => ({
        x: i === 0 ? -700 : i === 1 ? 700 : 500,
        y: i === 1 ? 500 : i === 2 ? -300 : 0,
        opacity: 0,
        rotate: i === 0 ? -45 : i === 1 ? 40 : 30,
        transition: { duration: 0.8, ease: "easeIn" },
      }));
    } else {
      // Khi scroll lên → hiện lại content 1
      titleControls.start("visible");
      subtitleControls.start("visible");
      descControls.start("visible");

      listItemControls.start("hidden");
      mainImagesControls.start({
        opacity: 0,
        y: 400,
        transition: { duration: 0.9, ease: "easeOut" },
      });
      // ✨ CHỈNH SỬA: trả ảnh về đúng vị trí x = 0
      mainImagesSection1Controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
      mainPopoupBackgroundSection1Controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
      // 3 ảnh con trở về vị trí
      childImagesControls.start({
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      });
      backgroundImagesSection2Controls.start({
        opacity: 0,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
      backgroundImagesSection1Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
    }
  }, [
    isInView,
    titleControls,
    subtitleControls,
    descControls,
    listItemControls,
    mainImagesControls,
    childImagesControls,
    backgroundImagesSection2Controls,
  ]);

  return (
    <div style={{ position: "relative", height: "1180px" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <motion.div className="mobile-app-section">
          <div className="background"></div>
          <div className="background-1"></div>

          {/* ====================== CONTENT 1 - Animate từng phần ====================== */}

          <div className="content">
            <motion.div
              className="title"
              custom={0}
              initial="hidden"
              animate={titleControls}
              variants={textVariants}
            >
              <motion.p className="p_1" custom={0} variants={textVariants}>
                Mobile
              </motion.p>
              <motion.p className="p_2" custom={1} variants={textVariants}>
                app design
              </motion.p>
            </motion.div>
            <motion.p
              className="subtitle"
              custom={2}
              initial="hidden"
              animate={subtitleControls}
              variants={textVariants}
            >
              Tối ưu hóa quy trình vận hành cửa hàng bằng nền tảng di động.
            </motion.p>
            <motion.p
              className="desc"
              custom={3}
              initial="hidden"
              animate={descControls}
              variants={textVariants}
            >
              Thiết kế giao diện trực quan, cho phép{" "}
              <motion.span
                custom={4}
                variants={textVariants}
                style={{ display: "inline-block" }}
              >
                quản lý toàn diện thực đơn, theo dõi và xử lý đơn hàng liên mạch
              </motion.span>
              , tăng tốc độ vận hành.
            </motion.p>
            {/* Ảnh chính + 3 ảnh con */}
            <div className="image-mobile">
              <motion.div
                initial={{ opacity: 1, rotate: 0 }}
                animate={mainPopoupBackgroundSection1Controls}
                className="image-mobile-background"
              ></motion.div>

              <div
                className="image-mobile-center-wrapper"
                style={{ zIndex: 21 }}
              >
                <motion.img
                  src={mobile}
                  initial={{ opacity: 1, rotate: 0 }}
                  animate={mainImagesSection1Controls}
                  style={{
                    width: "245.772px",
                    height: "495.695px",
                  }}
                />
              </div>

              {/* 3 ảnh con bay ra khi scroll xuống */}
              {[childMobile_1, childMobile_3, childMobile_2].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  className={`image-mobile-${i + 1}`}
                  custom={i}
                  initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  animate={childImagesControls}
                />
              ))}
            </div>{" "}
            <motion.div
              initial={{ opacity: 1, rotate: 0 }}
              animate={backgroundImagesSection1Controls}
              className="background-bot-1"
            >
              <img src={backgroundBot} alt="" />
              <span>Merchant App</span>
            </motion.div>
          </div>
          {/* ====================== CONTENT 2 - Hiện khi scroll xuống ====================== */}
          <motion.div
            className="content-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-mobile-content-2">
              <motion.div
                initial={{ opacity: 1, rotate: 0 }}
                animate={backgroundImagesSection2Controls}
                className="image-mobile-background-2"
              ></motion.div>

              {/* <motion.img
                src={mobile}
                alt=""
                className="image-mobile-center"
                initial={{ y: 400, opacity: 0 }}
                animate={mainImagesControls}
                style={{ zIndex: 20 }}
              /> */}

              <motion.img
                src={mobile_2}
                alt=""
                className="image-mobile-center-2"
                initial={{ y: 800, opacity: 0 }}
                animate={mainImagesControls}
                style={{ zIndex: 20 }}
              />
            </div>

            <div className="content-wrap">
              <div className="background-bot">
                <img src={backgroundBot} alt="" />
                <span>Merchant App</span>
              </div>

              {[
                "Quản lý Đơn hàng Liền mạch: Dễ dàng theo dõi trạng thái, tiếp nhận và xử lý đơn hàng chỉ với vài thao tác.",
                "Chi tiết Đơn Hàng Chính xác: Hiển thị đầy đủ thông tin sản phẩm, số lượng và yêu cầu đặc biệt.",
                "Quy trình Xử lý Rõ ràng: Phân luồng chuẩn bị đơn hàng một cách khoa học.",
                "Báo cáo Hiệu suất Thời gian thực: Cập nhật tức thì doanh thu, số lượng đơn hàng...",
              ].map((text, i) => {
                const [title, desc] = text.split(": ");
                return (
                  <motion.div
                    key={i}
                    className="content-text"
                    custom={i}
                    initial="hidden"
                    animate={listItemControls}
                    variants={listVariants}
                  >
                    <li>
                      {title}:
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                      >
                        {desc}
                      </motion.span>
                    </li>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Background elements */}
          <motion.div
            initial={{ opacity: 1, rotate: 0 }}
            animate={backgroundImagesSection2Controls}
            className="background-arrow"
          >
            <img src={leftArrow} alt="" />
            <img src={leftArrow} alt="" />
            <img src={leftArrow} alt="" />
            <img src={leftArrow} alt="" />
          </motion.div>
          <img className="background-phi-hanh-gia" src={phiHanhGia} alt="" />
        </motion.div>
      </div>

      {/* Checkpoint trigger */}
      <div
        ref={checkpointRef}
        style={{
          position: "absolute",
          bottom: "-2%",
          width: "100%",
          height: 1,
        }}
      />
    </div>
  );
};

export default MerchantSection;
