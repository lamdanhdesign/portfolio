import React, { useEffect, useState } from "react";
import "../styles/header.scss";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${isHidden ? "hidden" : ""}`}>
      <nav className="header-nav">
        <ul className="nav-list">
          <li onClick={() => handleScroll("about-me")}>Thông tin</li>
          <li onClick={() => handleScroll("skill")}>Kỹ năng</li>
          <li onClick={() => handleScroll("project")}>Dự án</li>
          <li onClick={() => handleScroll("target")}>Liên hệ</li>
          <li onClick={() => handleScroll()} className="lang-switch">
            VN EN
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
