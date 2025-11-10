import React from "react";
import "../styles/portfolio.scss";

// Remote image assets extracted from the Figma node (these URLs are time-limited).
const images = {
  freepik19202:
    "https://www.figma.com/api/mcp/asset/6304d4fb-baa7-4800-aa65-cb4ef333222a",
  freepik19203:
    "https://www.figma.com/api/mcp/asset/b51b260f-3780-4be6-b4f7-6b00b2c9e8e7",
  untitled1:
    "https://www.figma.com/api/mcp/asset/eb226def-6f92-4d18-8ef3-7f5fb53b380b",
  bgPattern:
    "https://www.figma.com/api/mcp/asset/dc360e16-cd67-4ca-8b5f6-7f70a8ef66e3",
  personalText:
    "https://www.figma.com/api/mcp/asset/ad363a40-e2da-4fde-8db3-35afe1d4317e",
  informationText:
    "https://www.figma.com/api/mcp/asset/faa4aa13-da04-4029-94e5-e633239d448b",
  rect10:
    "https://www.figma.com/api/mcp/asset/479e1cb0-11ea-464a-86cb-7ca7dbb1ba5d",
  rect20:
    "https://www.figma.com/api/mcp/asset/7411c681-9f48-482e-84cd-09e8f283fc21",
  rect16:
    "https://www.figma.com/api/mcp/asset/5b948a3d-1ba5-4f0a-b987-dbf7aca12c51",
  rect21:
    "https://www.figma.com/api/mcp/asset/ebcda28d-9bd2-4212-9089-96bd39bd35f4",
  subtract:
    "https://www.figma.com/api/mcp/asset/22a4ff97-16f0-4ea9-b091-6acf979dd447",
};

export default function Portfolio() {
  return (
    <section className="portfolio">
      <header className="portfolio__header">
        <div className="portfolio__header-bg">
          <img src={images.freepik19202} alt="hero-bg" />
        </div>

        <nav className="portfolio__nav">
          <ul>
            <li>Thông tin</li>
            <li>Kỹ năng</li>
            <li>Dự án</li>
            <li>Liên hệ</li>
            <li>VN EN</li>
          </ul>
        </nav>

        <div className="portfolio__hero">
          <h2 className="portfolio__hero-title">
            <span className="muted">WELCOME</span>
            <span className="accent"> TO YOU</span>
          </h2>

          <div className="portfolio__hero-main">
            <h1 className="hero-big">folio</h1>
            <button className="btn btn--primary">My CV</button>
            <div className="hero-illustration">
              <img src={images.freepik19203} alt="hero-illustration" />
            </div>
          </div>
        </div>
      </header>

      <section className="portfolio__personal">
        <div className="personal__decor">
          <img src={images.bgPattern} alt="decor" />
        </div>

        <div className="personal__media">
          <img src={images.untitled1} alt="portrait" />
        </div>

        <div className="personal__card personal__card--right">
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

        <div className="personal__card personal__card--left">
          <h4>LÂM DỊCH DANH</h4>
          <ul>
            <li>Tháng 7, 1995</li>
            <li>(+84) 966.501.209</li>
            <li>lamdanh227@gmail.com</li>
          </ul>
        </div>

        <div className="portfolio__posters">
          <div className="poster">
            <img src={images.rect16} alt="poster1" />
          </div>
          <div className="poster">
            <img src={images.rect10} alt="poster2" />
          </div>
          <div className="poster">
            <img src={images.rect20} alt="poster3" />
          </div>
          <div className="poster">
            <img src={images.rect21} alt="poster4" />
          </div>
        </div>
      </section>

      <section className="portfolio__work">
        <div className="section__title">
          <h3>Work experience</h3>
          <p>Kinh nghiệm làm việc</p>
        </div>
        <div className="work__cards">
          {/* Example simplified cards; extend as needed */}
          <div className="work__card">Mobile App</div>
          <div className="work__card">Graphic Design</div>
          <div className="work__card">Web Design</div>
        </div>
      </section>

      <footer className="portfolio__footer">
        <div className="footer__cta">
          <p>Design by Laam Danh - Dev by ...</p>
        </div>
      </footer>
    </section>
  );
}
