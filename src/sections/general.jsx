import "../styles/general.scss";
import tongHop from "../assets/images/Untitled-2 1.png";
import vien2 from "../assets/images/Vector 2.png";
const General = () => {
  return (
    <>
      <div className="general">
        <div className="general-background">
          <div className="background_1"></div>
          <div className="background_2"></div>
        </div>
        <div className="title_info">
          <p>Hành trình 3 năm kinh nghiệm</p>
          <p className="exp-mo-ta_p">
            Nền tảng <span>2 năm từ Graphic Design</span> đã giúp mình chuyển
            đổi và tập trung toàn lực với{" "}
            <span>1 năm kinh nghiệm trong UX/UI Design</span>
            hiện tại.
          </p>
        </div>
        <div className="general-images">
          <img src={tongHop} alt="Hành trình 3 năm kinh nghiệm" />
        </div>{" "}
        <div className="general-images_2">
          <img src={vien2} alt="Viền Hành trình 3 năm kinh nghiệm" />
        </div>
      </div>
    </>
  );
};
export default General;
