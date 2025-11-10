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

  return (
    <header className={`header ${isHidden ? "hidden" : ""}`}>
      <nav className="header-nav">
        <ul className="nav-list">
          <li>Thông tin</li>
          <li>Kỹ năng</li>
          <li>Dự án</li>
          <li>Liên hệ</li>
          <li className="lang-switch">VN EN</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
