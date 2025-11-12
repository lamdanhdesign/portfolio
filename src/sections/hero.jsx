import "../styles/hero.scss";
import tauBay from "../assets/images/3.png";
import Header from "./header";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <>
      <div className="wrapp">
        <section className="hero-section">
          <div className=" hero-container">
            <Header />
            <div className="welcome_portfolio">
              <div
                className="welcome"
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                <motion.div
                  className="welcome-text-wrapper"
                  animate={{ x: ["0%", "-50%"] }} // Dịch 1 nửa độ dài vì có 2 bản text
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{ display: "inline-flex" }}
                >
                  <span
                    className="welcome-text"
                    style={{ marginRight: "3rem" }}
                  >
                    WELCOME TO YOU &nbsp;&nbsp;&nbsp; WELCOME TO YOU
                    &nbsp;&nbsp;&nbsp; WELCOME TO YOU
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  {/* Bản sao y hệt để nối liền */}
                  <span
                    className="welcome-text"
                    style={{ marginRight: "3rem" }}
                  >
                    WELCOME TO YOU &nbsp;&nbsp;&nbsp; WELCOME TO YOU
                    &nbsp;&nbsp;&nbsp; WELCOME TO YOU
                  </span>
                </motion.div>
              </div>
              <div className="portfolio">
                <div className="portfolio-wrap">
                  {" "}
                  <div className="port-text">PORT</div>
                  <div className="folio-div">
                    <div className="porfolio-text">F</div>
                    <div className="porfolio-text">O</div>
                    <div className="porfolio-text">L</div>

                    <div className="porfolio-cv">
                      <motion.img
                        src={tauBay}
                        alt="tau bay"
                        initial={{ y: 50, opacity: 0 }} // bắt đầu thấp hơn và ẩn
                        animate={{ y: 0, opacity: 1 }} // bay lên và hiện ra
                        transition={{ duration: 1, ease: "easeOut" }} // hiệu ứng mượt
                      />
                      <div className="btn-my-cv mirror-shine-ultra mirror-shine-touch">
                        My CV
                      </div>{" "}
                    </div>

                    <div className="porfolio-text">O</div>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
            <div className="background-bot"></div>
          </div>{" "}
        </section>
      </div>
    </>
  );
};

export default Hero;
