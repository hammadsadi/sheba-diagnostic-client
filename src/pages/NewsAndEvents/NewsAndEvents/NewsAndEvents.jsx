import Loader from "../../../components/Loader/Loader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useGetAllNews from "../../../hooks/useGetAllNews";
import NewsItem from "../NewsItem/NewsItem";

const NewsAndEvents = () => {
  const [news, isLoading] = useGetAllNews();
  if (isLoading) return <Loader />;
  return (
    <section className="mt-10 md:mt-20 ">
      <div>
        <SectionTitle heading="News and Events" />
      </div>
      <div className="container mx-auto px-2 md:px-0">
        <section className="d">
          <div className="max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 text-gray-900">
            {news?.slice(0, 1).map((ns) => (
              <a
                rel="noopener noreferrer"
                href="#"
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
                key={ns._id}
              >
                <img
                  src={ns?.image}
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
                />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                    {ns?.title}
                  </h3>
                  <span className="text-xs ">{ns?.date}</span>
                  <p>{ns?.desc?.slice(0, 100)}</p>
                </div>
              </a>
            ))}
            {/* <a
              rel="noopener noreferrer"
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
            >
              <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  Noster tincidunt reprimique ad pro
                </h3>
                <span className="text-xs ">February 19, 2021</span>
                <p>
                  Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                  in graece fuisset, eos affert putent doctus id.
                </p>
              </div>
            </a> */}
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Item */}
              {news?.slice(2).map((item) => (
                <NewsItem key={item._id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default NewsAndEvents;
