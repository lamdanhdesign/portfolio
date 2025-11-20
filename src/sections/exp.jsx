import "../styles/exp.scss";
import hanhTinhBlue from "../assets/images/freepik192-07.png";
import hanhTinhSunny from "../assets/images/freepik192-06.png";
import hanhTinhTim from "../assets/images/freepik192-05 2.png";
import Ellipse from "../assets/images/Ellipse 10.png";
import Ellipse1 from "../assets/images/Ellipse 11.png";
import { motion } from "motion/react";

const ExpPage = () => {
  // Variants HOÀN HẢO: Chỉ chậm bounce khi hover – Slow Motion thuần túy 🌙
  const planetVariants = (defaultY = -8, hoverY = -30) => ({
    rest: {
      y: [0, defaultY, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      y: [0, hoverY, 0], // chỉ lên - xuống chậm rãi, không lặp 2 lần trong 1 chu kỳ
      rotate: [0, 8, -8, 0], // giữ nguyên độ lắc nhẹ như ban đầu
      transition: {
        duration: 3.2, // CHẬM GẤP ĐÔI → slow-motion thật sự
        repeat: Infinity,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier siêu mượt (giống easeOutBack nhẹ)
        // Nếu muốn chậm hơn nữa: duration: 4.0
      },
    },
  });

  return (
    <>
      <div className="exp" id="skill">
        <div className="exp-background">
          <div className="exp-background-color"></div>
          <div className="exp-background-color-1-ellipse"></div>

          <div className="exp-title">
            <div className="title">
              <p className="p_1">Work</p> <p className="p_2">experience</p>
            </div>
            <p className="p_3">Kinh nghiệm làm việc</p>
            <div className="exp-mo-ta">
              <p className="exp-mo-ta_p">
                Tôi sở hữu kinh nghiệm thực tiễn trong việc phát triển giao diện
                và trải nghiệm người dùng dựa trên:{" "}
                <span>Graphic Design, Mobile App,</span> và{" "}
                <span>Web Design.</span>
              </p>
            </div>
          </div>

          <div className="exp-hanh-tinh">
            <img className="border-ellipse1" src={Ellipse} alt="" />
            <button className="graphic-design">Graphic Design</button>
            <button className="mobile-app">Mobile App</button>
            <button className="graphic-design">Graphic Design</button>
            <img className="border-ellipse2" src={Ellipse1} alt="" />
            <button className="web-design">Web Design</button>

            {/* 🌍 Hành tinh xanh */}
            <motion.img
              src={hanhTinhBlue}
              alt="Blue Planet"
              className="hanh-tinh-blue"
              variants={planetVariants(-8, -30)}
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            />

            {/* 🌞 Hành tinh vàng */}
            <motion.img
              src={hanhTinhSunny}
              alt="Sunny Planet"
              className="hanh-tinh-sunny"
              variants={planetVariants(-10, -45)} // bay cao hơn
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            />

            {/* 💜 Hành tinh tím */}
            <motion.img
              src={hanhTinhTim}
              alt="Purple Planet"
              className="hanh-tinh-tim"
              variants={planetVariants(-9, -32)}
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpPage;
