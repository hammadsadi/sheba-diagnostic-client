import useAuth from "../../../hooks/useAuth";
import BannerSlider from "../BannerSlider/BannerSlider";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      {/* Slider */}
      <BannerSlider />
    </div>
  );
};

export default Home;
