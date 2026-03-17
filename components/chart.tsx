"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function Chart({ data }: any) {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line dataKey="completed" stroke="#16a34a" />
    </LineChart>
  );
}