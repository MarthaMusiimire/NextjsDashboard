"use client";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  LineChart, Line,
} from "recharts";

const barData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 200 },
];

const pieData = [
  { name: "Completed", value: 60 },
  { name: "Pending", value: 30 },
  { name: "Failed", value: 10 },
];

const lineData = [
  { name: "Week 1", revenue: 2400 },
  { name: "Week 2", revenue: 1398 },
  { name: "Week 3", revenue: 9800 },
  { name: "Week 4", revenue: 3908 },
];

const COLORS = ["#4ade80", "#facc15", "#f87171"]; // green, yellow, red

export default function Charts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      {/* Bar Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Users per Month</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Report Status</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={70}>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Weekly Revenue</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
