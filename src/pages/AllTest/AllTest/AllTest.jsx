import { useState } from "react";
import Loader from "../../../components/Loader/Loader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TestItem from "../TestItem/TestItem";
import { isToday, isFuture, compareAsc } from "date-fns";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
const AllTest = () => {
  const [testList, setTestList] = useState([]);
  const [filterTestList, setFilterTestList] = useState([]);
  const axiosCommon = useAxiosCommon();
  const { data: listTests = [], isLoading } = useQuery({
    queryKey: ["listTests"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/tests");
      setTestList(data);
      setFilterTestList(data);
      return data;
    },
  });

  const totalItemPerPage = 3;
  const itemOfPerPage = Math.ceil(testList.length / totalItemPerPage);
  const pages = [...Array(itemOfPerPage).keys()];
  console.log(pages);

  // handleChangeTestdate
  const handleChangeTestdate = (e) => {
    let flDate = filterTestList.filter((dt) => {
      // compareAsc(new Date(dt?.date), new Date(e.target.value));
      let res = compareAsc(new Date(dt?.date), new Date(e.target.value));
      if (res === 0) {
        return dt;
      }
    });
    setTestList(flDate);
    console.log(flDate);
  };

  if (isLoading) return <Loader />;
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
