import BannerItem from "../../../components/SliderItem/BannerItem";
import useGetAllBanners from "../../../hooks/useGetAllBanners";
const Banner = () => {
  const [banners] = useGetAllBanners();
  // const [item, setItem] = useState()

  let item = banners.find((bn) => bn.isActive === true);

  // const item = {
  //   id: 1,
  //   title: "Let Admit for Your Forever Home.",
  //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciuntillo tenetur fuga ducimus numquam ea!",
  //   couponCode: "B17SD",
  //   discount: 10,
  //   image:
  //     "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  // };

  return (
    <div>
      <>
        <BannerItem item={item} />
      </>
    </div>
  );
};

export default Banner;
