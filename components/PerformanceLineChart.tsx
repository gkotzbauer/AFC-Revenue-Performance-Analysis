// PerformanceLineChart component

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DataRow {
  Performance: string;
  "Predicted Total Payments": number;
  "Total Payments": number;
  Week?: string;
}

export default function PerformanceLineChart({ data }: { data: DataRow[] }) {
  const chartData = data.map((row, index) => ({
    week: row.Week || `Week ${index + 1}`,
    predicted: row["Predicted Total Payments"],
    actual: row["Total Payments"]
  }));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Performance Over Time</h2>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="predicted" stroke="#8884d8" name="Predicted" />
        <Line type="monotone" dataKey="actual" stroke="#82ca9d" name="Actual" />
      </LineChart>
    </div>
  );
}
