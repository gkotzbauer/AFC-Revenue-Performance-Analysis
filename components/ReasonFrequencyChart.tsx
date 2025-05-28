// ReasonFrequencyChart component

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DataRow {
  Performance: string;
  Reason?: string;
}

export default function ReasonFrequencyChart({ data }: { data: DataRow[] }) {
  const reasonCounts = data.reduce((acc: { [key: string]: number }, row) => {
    if (row.Reason) {
      acc[row.Reason] = (acc[row.Reason] || 0) + 1;
    }
    return acc;
  }, {});

  const chartData = Object.entries(reasonCounts).map(([reason, count]) => ({
    reason,
    count
  }));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Reason Frequency</h2>
      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="reason" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" name="Frequency" />
      </BarChart>
    </div>
  );
}
