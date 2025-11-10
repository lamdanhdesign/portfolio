import Persional from "./sections/persional";
import "./App.scss";
import ExpPage from "./sections/exp";
import General from "./sections/general";
import Hero from "./sections/hero";

import MerchantSection from "./sections/merchant";
import UsersDriveSection from "./sections/users-drive";
import WebsiteSection from "./sections/website";
import GraphicDesSection from "./sections/graphic-design";
import Contact from "./sections/contract";
function App() {
  return (
    <>
      <div className="layout">
        <div className="layout-wrapper">
          <Hero />
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
    </>
  );
}

export default App;
