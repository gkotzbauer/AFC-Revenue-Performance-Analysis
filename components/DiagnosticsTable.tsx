// DiagnosticsTable component

import { Card } from '@/components/ui/card';

interface DataRow {
  Performance: string;
  "Predicted Total Payments": number;
  "Total Payments": number;
  Reason?: string;
}

export default function DiagnosticsTable({ data }: { data: DataRow[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Diagnostics Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted Total Payments</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Payments</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{row.Performance}</td>
                <td className="px-6 py-4 whitespace-nowrap">${row["Predicted Total Payments"].toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">${row["Total Payments"].toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.Reason || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
