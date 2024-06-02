import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TestItem from "../../Shared/TestItem/TestItem";

const FeaturesTest = () => {
  return (
    <div>
      <section className="mt-10 md:mt-20">
        <div className="container mx-auto px-2 md:px-0">
          <div>
            <SectionTitle heading="featured tests" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <TestItem />
            <TestItem />
            <TestItem />
            <TestItem />
            <TestItem />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesTest;
