import { useEffect, useRef, useState } from "react";
import "./App.scss";

import Hero from "./sections/hero";
import Persional from "./sections/persional";
import ExpPage from "./sections/exp";
import General from "./sections/general";
import MerchantSection from "./sections/merchant";
import UsersDriveSection from "./sections/users-drive";
import WebsiteSection from "./sections/website";
import GraphicDesSection from "./sections/graphic-design";
import Contact from "./sections/contract";
import HeaderSidebar from "./sections/icon-header";

function App() {
  const heroRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Khi Hero còn nhìn thấy (entry.isIntersecting === true)
        // => Ẩn sidebar, khi Hero ra khỏi viewport => hiện sidebar
        setShowSidebar(!entry.isIntersecting);
      },
      { threshold: 0.3 } // Khi 30% Hero còn trong viewport thì vẫn tính là "đang nhìn thấy"
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="layout">
      <div className="layout-wrapper">
        {/* Hero Section */}
        <div ref={heroRef}>
          <Hero />
        </div>

        {/* Sidebar — chỉ hiển thị sau khi Hero khuất */}
        {showSidebar && <HeaderSidebar />}

        <Persional />
        <ExpPage />
        <General />
        <MerchantSection />
        <UsersDriveSection />
        <WebsiteSection />
        <GraphicDesSection />
        <Contact />
      </div>
    </div>
  );
}

export default App;
