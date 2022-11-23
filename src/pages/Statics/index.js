import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statics = () => {
  const data = JSON.parse(localStorage.getItem("time")) ?? [];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h1
        style={{
          color: "brown",
          backgroundColor: "white",
          fontSize: "40px",
          marginBottom: "50px",
          border: "3px solid brown",
          padding: "20px",
        }}
      >
        Thời gian học tập làm việc của bạn
      </h1>
      <ResponsiveContainer width={1000} height={600}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="time" stroke="brown" fill="brown" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statics;
