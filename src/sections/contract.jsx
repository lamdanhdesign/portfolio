import React, { useState } from "react";
import "../styles/contract.scss";
import zaloIcon from "../assets/images/contract/Zalo2.png";
import phoneIcon from "../assets/images/contract/Phone.png";
import gmailIcon from "../assets/images/contract/gmail.png";
import avatar from "../assets/images/contract/thanks-you.png";
import cvIcon from "../assets/images/contract/cv.gif";
import iconCopy from "../assets/images/contract/content_copy_Rounded.svg";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  // Hàm copy + hiện toast xinh xắn
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2400); // Tự ẩn sau 2.4s
      })
      .catch((err) => {
        console.error("Lỗi khi copy:", err);
      });
  };

  return (
    <>
      {" "}
      <div className="thankyou-wrapper" id="contact">
        <div className="thankyou-card">
          <div className="left-section">
            <h1>Cảm ơn bạn đã dành thời gian khám phá Portfolio của tôi!</h1>
            <p>
              Tôi luôn sẵn sàng kết nối và thảo luận về các cơ hội UX/UI tiềm
              năng. Hãy liên hệ với tôi qua:
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <img src={zaloIcon} alt="Zalo" />
                <div>
                  <div className="label">Liên hệ Zalo</div>
                  <div className="value">0966.501.209</div>
                </div>
              </div>

              <div className="contact-item">
                <img src={phoneIcon} alt="Phone" />
                <div>
                  <div className="label">Số điện thoại</div>
                  <div className="value">0966.501.209</div>
                </div>
              </div>

              <div className="contact-item">
                <img src={gmailIcon} alt="Gmail" />
                <div>
                  <div className="label">Email</div>
                  <div
                    className="value"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                    }}
                  >
                    lamdanh227@gmail.com
                    <img
                      src={iconCopy}
                      className="copy"
                      alt="Copy email"
                      onClick={() => handleCopy("lamdanh227@gmail.com")}
                      style={{ cursor: "pointer" }}
                      title="Copy email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="thankyou-box">
              <img src={avatar} alt="Avatar" className="avatar-small" />
              <a
                href="/path-to-your-cv.pdf"
                download
                className="cv-button mirror-shine-ultra mirror-shine-touch"
              >
                <img src={cvIcon} alt="Download" />
                <span> Curriculum Vitae</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="footer">Design by Laam Danh – Dev by</footer>
      </div>
      {/* Toast Glassmorphism Siêu Xinh */}
      <div className={`copy-toast ${showToast ? "show" : ""}`}>
        <div className="toast-content">
          <span className="toast-icon">✓</span>
          <span className="toast-text">Đã sao chép email!</span>
        </div>
        <div className="toast-progress"></div>
      </div>
    </>
  );
};

export default Contact;
