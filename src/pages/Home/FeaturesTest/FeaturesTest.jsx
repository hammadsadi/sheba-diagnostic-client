import { useQuery } from "@tanstack/react-query";
import FeaturedBookTestItem from "../../../components/FeaturedBookTestItem/FeaturedBookTestItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import Loader from "../../../components/Loader/Loader";

const FeaturesTest = () => {
  const axiosCommon = useAxiosCommon();
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("bookings");
      return data;
    },
  });
  if (isLoading) return <Loader />;
  return (
    <div>
      <section className="mt-10 md:mt-20">
        <div className="container mx-auto px-2 md:px-0">
          <div>
            <SectionTitle heading="featured tests" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {bookings?.slice(0, 5).map((booking) => (
              <FeaturedBookTestItem key={booking._id} booking={booking} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesTest;
