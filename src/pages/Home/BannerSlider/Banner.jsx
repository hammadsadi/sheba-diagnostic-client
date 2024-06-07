import BannerItem from "../../../components/SliderItem/BannerItem";
import useGetAllBanners from "../../../hooks/useGetAllBanners";
const Banner = () => {
  const [banners] = useGetAllBanners();

  let item = banners.find((bn) => bn.isActive === true);

  return (
    <div>
      <>
        <BannerItem item={item} />
      </>
    </div>
  );
};

export default Banner;
