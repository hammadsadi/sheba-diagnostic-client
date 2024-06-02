// import useAuth from "../../../hooks/useAuth";
import BannerSlider from "../BannerSlider/BannerSlider";
import FeaturesTest from "../FeaturesTest/FeaturesTest";
import PromotionBanner from "../PromotionBanner/PromotionBanner";

const Home = () => {
  // const { user } = useAuth();

  return (
    <div>
      {/* Slider */}
      <BannerSlider />
      {/* Features Test */}
      <FeaturesTest />
      {/* Promotion Banner */}
      <PromotionBanner />
    </div>
  );
};

export default Home;
