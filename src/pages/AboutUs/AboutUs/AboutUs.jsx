import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import Team from "../Team/Team";

const AboutUs = () => {
  const axiosCommon = useAxiosCommon();
  const { data: healthTips = [] } = useQuery({
    queryKey: ["healthTips"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/health/recommendation");
      return data;
    },
  });
  return (
    <section className="mt-10 md:mt-20 text-gray-800">
      <div>
        <SectionTitle heading="About Us" />
      </div>
      <div className="container mx-auto px-2 md:px-0">
        {/* Hospital Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <img
              src="https://iili.io/Jyg0Mqg.jpg"
              alt=""
              className="border-4 border-primary"
            />
          </div>
          <div>
            <h5 className="text-lg font-bold">Sheba Diagnostic center...</h5>
            <p>
              A hospital is an institution for healthcare typically providing
              specialised treatment for inpatient (or overnight) stays. Some
              hospitals primarily admit patients suffering from a specific
              disease or affection, or are reserved for the diagnosis and
              treatment of conditions affecting a specific age group. Others
              have a mandate that expands beyond offering dominantly curative
              and rehabilitative care services to include promotional,
              preventive and educational roles as part of a primary healthcare
              approach. Today, hospitals are usually funded by the state, health
              organisations (for profit or non-profit), by health insurances or
              by charities and by donations. Historically, however, they were
              often founded and funded by religious orders or charitable
              individuals and leaders. Hospitals are nowadays staffed by
              professionally trained doctors, nurses, paramedical clinicians,
              etc., whereas historically, this work was usually done by the
              founding religious orders or by volunte
            </p>
          </div>
        </div>

        <div>
          <section className="py-6 ">
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
              <SectionTitle heading="Meet Our Title" />
              <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {healthTips?.slice(0, 8).map((team) => (
                  <Team key={team._id} team={team} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
