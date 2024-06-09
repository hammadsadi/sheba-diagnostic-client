import { useEffect, useState } from "react";
// import Loader from "../../../components/Loader/Loader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TestItem from "../TestItem/TestItem";
import { isToday, isFuture, compareAsc } from "date-fns";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
const AllTest = () => {
  const [testList, setTestList] = useState([]);
  const axiosCommon = useAxiosCommon();

  useEffect(() => {
    axiosCommon.get("tests").then((res) => {
      setTestList(res.data);
    });
  }, [axiosCommon]);

  // handleChangeTestdate
  const handleChangeTestdate = (e) => {
    let flDate = testList.filter((dt) => {
      let res = compareAsc(new Date(dt?.date), new Date(e.target.value));
      console.log(res);
      return;
    });
  };
  // if (isLoading) return <Loader />;
  return (
    <div>
      {" "}
      <section className="mt-10 md:mt-20">
        <div className="container mx-auto px-2 md:px-0">
          <div>
            <SectionTitle heading="All Tests" />
          </div>
          <div className="max-w-sm my-2 md:my-4 mx-auto">
            {" "}
            <input
              type="date"
              name="date"
              id="date"
              onChange={handleChangeTestdate}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testList
              ?.filter(
                (dt) =>
                  isToday(new Date(dt?.date)) || isFuture(new Date(dt?.date))
              )
              .map((item) => (
                <TestItem key={item._id} item={item} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTest;
