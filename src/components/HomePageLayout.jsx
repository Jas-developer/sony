import Header from "./Header";
import HeroPage from "./HeroPage";
import Footer from "./Footer";
import Featured from "./Featured";
const HomePageLayout = () => {
  return (
    <div className="HomePage bg-dark">
      <Header />
      <HeroPage />
      <Featured />
      <Footer />
    </div>
  );
};

export default HomePageLayout;
