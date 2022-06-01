import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import moment from "moment";
import { unix } from "moment";

export const Chart = ({ infections, width }) => {
  const data = infections.map((el) => ({
    date: moment(el.date).unix(),
    activeCases: el.activeCases,
  }));
  if (data.length === 0) {
    return <div></div>;
  }

  return (
    <ResponsiveContainer width={width} height={350}>
      <LineChart
        height={350}
        width={width}
        animationDuration={3000}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          name="Time period"
          domain={[data[0].date, data[data.length - 1].date]}
          tickFormatter={(el) => unix(el).format("YYYY-MM-DD")}
          type="number"
        />
        <YAxis dataKey="activeCases" name="Cases" />
        <Tooltip
          formatter={(value) => [value, "Active Cases"]}
          labelFormatter={(el) => unix(el).format("YYYY-MM-DD")}
        />
        <Line
          type="monotone"
          dataKey="totalCases"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="activeCases"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
