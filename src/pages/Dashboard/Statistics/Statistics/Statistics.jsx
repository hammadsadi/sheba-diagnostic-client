import {
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Bar,
  BarChart,
} from "recharts";
import useGetAllBookings from "../../../../hooks/useGetAllBookings";
import useGetAllDelivered from "../../../../hooks/useGetAllDelivered";

const Statistics = () => {
  const [bookings] = useGetAllBookings();
  const [delivered] = useGetAllDelivered();

  console.log(delivered);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      <div>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={bookings}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="testName" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="testPrice"
                stroke="#09727b"
                fill="#32c1ce"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={delivered}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="report" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="testPrice"
                fill="#32c1ce"
                background={{ fill: "#ebfcfd" }}
              />
              <Bar dataKey="slots" fill="#09727b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
