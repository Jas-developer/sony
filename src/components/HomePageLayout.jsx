import Header from "./Header";
import HeroPage from "./HeroPage";
import Footer from "./Footer";
import Featured from "./Featured";
import AdsSection from "./AdsSection";
const HomePageLayout = () => {
  return (
    <div className="HomePage bg-dark">
      <Header />
      <HeroPage />

      <Featured />
      <AdsSection />
      <Footer />
    </div>
  );
};

export default HomePageLayout;
