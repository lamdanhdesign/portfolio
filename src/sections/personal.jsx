import React from "react";
import "../styles/personal.scss";

// Remote assets from Figma node 81:613 (time-limited URLs)
const images = {
  bgPattern:
    "https://www.figma.com/api/mcp/asset/ef135113-fa40-4327-bd06-2a0b40b22fa3",
  heroIllustration:
    "https://www.figma.com/api/mcp/asset/339f14ff-f60c-4996-bea1-99f7d0bba25c",
  portrait:
    "https://www.figma.com/api/mcp/asset/213078ff-e5f6-4377-a7cf-5c407fad2102",
  personalText:
    "https://www.figma.com/api/mcp/asset/463f5740-ca2c-470c-98de-75e3a618ca16",
  informationText:
    "https://www.figma.com/api/mcp/asset/bac8d568-2ca2-4f08-90b7-a4fc838c4474",
  decor1:
    "https://www.figma.com/api/mcp/asset/9a2de05a-4503-472c-96f1-823ed14980c6",
  decor2:
    "https://www.figma.com/api/mcp/asset/6fea9fe2-c42b-4f0a-a1a1-d3f322d650f0",
  decor3:
    "https://www.figma.com/api/mcp/asset/f82f92e7-2fe1-4e49-8ea1-d6345ef713f0",
  poster1:
    "https://www.figma.com/api/mcp/asset/49d6a9c7-8f9e-433a-8b54-1e191b77fbc0",
  poster2:
    "https://www.figma.com/api/mcp/asset/86658e70-fc3a-4bc6-bce8-00d00e3cb306",
  poster3:
    "https://www.figma.com/api/mcp/asset/b71ac95c-f660-4887-b49f-e49afffed78c",
  poster4:
    "https://www.figma.com/api/mcp/asset/45c7b4d3-3775-478b-be10-ab3101023179",
  iconPhone:
    "https://www.figma.com/api/mcp/asset/19744653-5cfd-4a8f-8edc-d3e6cccdb0f9",
  iconMail:
    "https://www.figma.com/api/mcp/asset/9a2c53e0-e872-43cd-858c-b1b8db353fd5",
  ellipse:
    "https://www.figma.com/api/mcp/asset/5953769b-22dd-4f22-a2f7-b568179d09bd",
  badgeIcon:
    "https://www.figma.com/api/mcp/asset/b995b3a8-06c2-4bdd-a415-018eafdeb26b",
  subtract:
    "https://www.figma.com/api/mcp/asset/f7707ba5-e118-4073-83f8-7342d69dd206",
};

export default function PersonalSection() {
  return (
    <section className="personal-section" aria-label="Personal information">
      <div className="personal-section__bg">
        <img src={images.bgPattern} alt="background pattern" />
      </div>

      <div className="personal-section__heading">
        <div className="personal-section__title-img">
          <img src={images.personalText} alt="Personal" />
        </div>
        <div className="personal-section__subtitle-img">
          <img src={images.informationText} alt="information" />
        </div>
        <p className="personal-section__small">Thông tin cá nhân</p>
      </div>

      <div className="personal-section__center">
        <div className="personal-section__card personal-section__card--left">
          <h4>LÂM DỊCH DANH</h4>
          <ul>
            <li>Tháng 7, 1995</li>
            <li>(+84) 966.501.209</li>
            <li>lamdanh227@gmail.com</li>
          </ul>
        </div>

        <div className="personal-section__portrait">
          <img src={images.portrait} alt="Portrait" />
        </div>

        <div className="personal-section__card personal-section__card--right">
          <h3>Dịch Danh – UX/UI Designer</h3>
          <blockquote>
            “Thiết kế lấy người dùng làm trọng tâm định hướng mọi dự án của
            tôi.”
          </blockquote>
          <p>
            Mình đam mê chuyển đổi các tương tác phức tạp thành trải nghiệm kỹ
            thuật số đơn giản, dễ hiểu. Mục tiêu là mang lại giá trị thực tế,
            nơi vẻ đẹp song hành cùng tính ứng dụng cao.
          </p>
        </div>
      </div>

      <div className="personal-section__posters">
        <div className="poster">
          <img src={images.poster3} alt="poster 1" />
        </div>
        <div className="poster">
          <img src={images.poster2} alt="poster 2" />
        </div>
        <div className="poster">
          <img src={images.poster1} alt="poster 3" />
        </div>
        <div className="poster">
          <img src={images.poster4} alt="poster 4" />
        </div>
      </div>

      <div className="personal-section__decor">
        <img src={images.subtract} alt="subtract wave" />
      </div>
    </section>
  );
}
