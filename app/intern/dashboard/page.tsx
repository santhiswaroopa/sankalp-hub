"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function DonutCard({
  title,
  value,
  total,
  color,
}: {
  title: string;
  value: number;
  total: number;
  color: string;
}) {
  const data = [
    { name: "done", value: value },
    { name: "remaining", value: total - value },
  ];

  const percent = Math.round((value / total) * 100);

  return (
    <div className="rounded-2xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 w-[300px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="text-sm font-medium text-gray-500">{percent}%</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative h-28 w-28">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={38}
                outerRadius={52}
                stroke="none"
              >
                <Cell fill={color} />
                <Cell fill="#e5e7eb" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            <span className="text-[11px] text-gray-500">of {total}</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">Progress</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-400 mt-1">
            Total tasks: <span className="font-medium text-gray-600">{total}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InternDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Intern Dashboard</h1>
        <p className="text-gray-500 mt-2">
          Track your completed and pending work clearly.
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        <DonutCard
          title="Completed"
          value={8}
          total={10}
          color="#2563eb"
        />

        <DonutCard
          title="Pending"
          value={3}
          total={10}
          color="#1d4ed8"
        />
      </div>
    </div>
  );
}