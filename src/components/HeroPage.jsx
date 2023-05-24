import HeroImage from "../assets/SonyCameraNoBg.png";
import "./HeroPage.css";
const HeroPage = () => {
  return (
    <div className="HeroSection">
      <div className="row mt-5">
        <div className="col-md-4 mt-5">
          <div className="heroText text-center p-2">
            <h1 className="text-center  mt-5" id="sony">
              SONY
            </h1>
          </div>
          <div className="HeroShortMessage text-light text-center p-3 ">
            <h5 id="hero-text">
              Unleash Your Photographic Vision with{" "}
              <b className="text-success">Sony.</b>
            </h5>
            <h5>
              Explore, Capture, and Create with Our Cutting-Edge Camera
              Solutions.
            </h5>
          </div>
          <div className="heroButton text-center">
            <button className="p-2" id="btt">
              Explore
            </button>
          </div>
        </div>
        <div className="col-sm-8 justify-content-center text-center  p-5">
          <img src={HeroImage} alt="" className="text-center" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
