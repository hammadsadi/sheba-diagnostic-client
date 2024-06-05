// import useAuth from "../../../hooks/useAuth";
import Banner from "../BannerSlider/Banner";
import FeaturesTest from "../FeaturesTest/FeaturesTest";
import PromotionBanner from "../PromotionBanner/PromotionBanner";

const Home = () => {
  // const { user } = useAuth();

  return (
    <div>
      {/* Slider */}
      <Banner />
      {/* Features Test */}
      <FeaturesTest />
      {/* Promotion Banner */}
      <PromotionBanner />
    </div>
  );
};

export default Home;
