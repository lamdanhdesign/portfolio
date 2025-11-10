import "../styles/hero.scss";
import tauBay from "../assets/images/3.png";
import Header from "./header";

const Hero = () => {
  return (
    <>
      <div className="wrapp">
        <section className="hero-section">
          <div className=" hero-container">
            <Header />
            <div className="welcome_portfolio">
              <div className="welcome">
                <span className="welcome-text">WELCOME TO YOU</span>
              </div>
              <div className="portfolio">
                <div className="port-text">PORT</div>
                <div className="folio-div">
                  <div className="porfolio-text">F</div>
                  <div className="porfolio-text">O</div>
                  <div className="porfolio-text">L</div>

                  <div className="porfolio-cv">
                    <img src={tauBay} alt="" />
                    <div className="btn-my-cv mirror-shine-ultra mirror-shine-touch">
                      My CV
                    </div>{" "}
                  </div>

                  <div className="porfolio-text">O</div>
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
