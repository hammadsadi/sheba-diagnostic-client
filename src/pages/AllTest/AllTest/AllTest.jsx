import Loader from "../../../components/Loader/Loader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useGetAllTests from "../../../hooks/useGetAllTests";
import TestItem from "../TestItem/TestItem";

const AllTest = () => {
  const [tests, isLoading] = useGetAllTests();

  if (isLoading) return <Loader />;
  return (
    <div>
      {" "}
      <section className="mt-10 md:mt-20">
        <div className="container mx-auto px-2 md:px-0">
          <div>
            <SectionTitle heading="All Tests" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {tests.map((item) => (
              <TestItem key={item._id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTest;
