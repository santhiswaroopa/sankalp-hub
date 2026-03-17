"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const stats = [
  { title: "Interns", value: 12, total: 20, color: "#2563eb" },
  { title: "Assignments", value: 24, total: 30, color: "#7c3aed" },
  { title: "Submissions", value: 18, total: 25, color: "#059669" },
];

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
    { name: "Completed", value },
    { name: "Remaining", value: total - value },
  ];

  const percentage = Math.round((value / total) * 100);

  return (
    <div className="rounded-2xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative h-28 w-28">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={35}
                outerRadius={50}
                dataKey="value"
                stroke="none"
              >
                <Cell fill={color} />
                <Cell fill="#e5e7eb" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            <span className="text-xs text-gray-500">of {total}</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">Current Count</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-400 mt-1">
            Total target: <span className="font-medium text-gray-600">{total}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      {/* <aside className="w-72 bg-blue-900 text-white p-6 flex flex-col">
        <h1 className="text-4xl font-extrabold mb-10 tracking-tight">SankalpHub</h1>

        <nav className="space-y-4 text-lg">
          <a href="#" className="block hover:text-blue-200 transition">Dashboard</a>
          <a href="#" className="block hover:text-blue-200 transition">Intern Management</a>
          <a href="#" className="block hover:text-blue-200 transition">Notes</a>
          <a href="#" className="block hover:text-blue-200 transition">Assignments</a>
          <a href="#" className="block hover:text-blue-200 transition">Submissions</a>
          <a href="#" className="block hover:text-blue-200 transition">Analytics</a>
        </nav>

        <div className="mt-auto">
          <div className="h-12 w-12 rounded-full bg-black/40 flex items-center justify-center text-white text-xl border border-white/20">
            N
          </div>
        </div>
      </aside> */}

      {/* Main content */}
      <main className="flex-1 p-10">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Admin Dashboard</h2>
          <p className="text-gray-500 mt-2">
            Monitor interns, assignments, and submissions in a better visual way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stats.map((item) => (
            <DonutCard
              key={item.title}
              title={item.title}
              value={item.value}
              total={item.total}
              color={item.color}
            />
          ))}
        </div>
      </main>
    </div>
  );
}