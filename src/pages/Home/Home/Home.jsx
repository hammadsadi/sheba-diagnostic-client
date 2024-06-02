import useAuth from "../../../hooks/useAuth";
import BannerSlider from "../BannerSlider/BannerSlider";
import FeaturesTest from "../FeaturesTest/FeaturesTest";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      {/* Slider */}
      <BannerSlider />
      {/* Features Test */}
      <FeaturesTest />
    </div>
  );
};

export default Home;
