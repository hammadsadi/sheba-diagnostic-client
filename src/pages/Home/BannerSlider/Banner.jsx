import Loader from "../../../components/Loader/Loader";
import BannerItem from "../../../components/SliderItem/BannerItem";
import useGetAllBanners from "../../../hooks/useGetAllBanners";
const Banner = () => {
  const [banners, isLoading] = useGetAllBanners();

  let item = banners.find((bn) => bn.isActive === true);

  if (isLoading) return <Loader />;
  return (
    <div>
      <>
        <BannerItem item={item} />
      </>
    </div>
  );
};

export default Banner;
