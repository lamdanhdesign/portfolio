import "../styles/exp.scss";
import hanhTinhBlue from "../assets/images/freepik192-07.png";
import hanhTinhSunny from "../assets/images/freepik192-06.png";
import hanhTinhTim from "../assets/images/freepik192-05 2.png";
import Ellipse from "../assets/images/Ellipse 10.png";
import Ellipse1 from "../assets/images/Ellipse 11.png";
const ExpPage = () => {
  return (
    <>
      <div className="exp">
        <div className="exp-background">
          <div className="exp-background-color"></div>{" "}
          <div className="exp-background-color-1-ellipse"></div>
          <div className="exp-title">
            <div className="title">
              <p className="p_1">Work</p> <p className="p_2">experience</p>
            </div>
            <p className="p_3">Kinh nghiệm làm việc</p>{" "}
            <div className="exp-mo-ta">
              <p>
                Tôi sở hữu kinh nghiệm thực tiễn trong việc phát triển giao diện
                và trải nghiệm người dùng dựa trên: Graphic Design, Mobile App,
                và Web Design.
              </p>
            </div>
          </div>
          <div className="exp-hanh-tinh">
            <img className="border-ellipse1" src={Ellipse} alt="" />
            <button className="graphic-design">Graphic Design</button>
            <button className="mobile-app">Mobile App</button>
            <button className="graphic-design">Graphic Design</button>
            <img className="border-ellipse2" src={Ellipse1} alt="" />{" "}
            <button className="web-design">Web Design</button>
            <img src={hanhTinhBlue} alt="" className="hanh-tinh-blue" />
            <img src={hanhTinhSunny} alt="" className="hanh-tinh-sunny" />{" "}
            <img src={hanhTinhTim} alt="" className="hanh-tinh-tim" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpPage;
