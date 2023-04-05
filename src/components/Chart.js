import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function Chart() {
  const data = [
    {
      name: "january",
      newUsers: 90,
      orders: 240,
      amt: 240
    },
    {
      name: "february",
      newUsers: 70,
      orders: 138,
      amt: 22
    },
    {
      name: "march",
      newUsers: 110,
      orders: 111,
      amt: 220
    },
    {
      name: "april",
      newUsers: 120,
      orders: 298,
      amt: 2000
    },
    {
      name: "may",
      newUsers: 0,
      orders: 0,
      amt: 0
    },
    {
      name: "june",
      newUsers: 0,
      orders: 0,
      amt: 0
    },
    {
      name: "july",
      newUsers: 0,
      orders: 0,
      amt: 0
    },
    {
      name: "August",
      newUsers: 0,
      orders: 0,
      amt: 0
    },
    {
      name: "September",
      newUsers: 0,
      orders: 0,
      amt: 0
    },
    {
      name: "October",
      newUsers: 0,
      orders: 0,
      amt: 0
    },
    {
      name: "November",
      newUsers: 0,
      orders: 0,
      amt: 0
    },
    {
      name: "December ",
      newUsers: 0,
      orders: 0,
      amt: 0
    }
  ];

  const formatYAxisTick = (tickValue, index) => {
    return (index * 10) + '%';
  };

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={formatYAxisTick} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="newUsers"
        stroke="#8884d8"
        strokeDasharray="5 5"
      />
      <Line
        type="monotone"
        dataKey="orders"
        stroke="#82ca9d"
        strokeDasharray="3 4 5 2"
      />
    </LineChart>
  );
}
