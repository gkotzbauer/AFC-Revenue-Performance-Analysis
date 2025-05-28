import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { downloadCSV } from "@/lib/downloadCSV";

export default function SummaryInsights({ data }: { data: any }) {
  const totalWeeks = data.length;
  const diagnosticCounts = data.reduce(
    (acc: any, row: any) => {
      const perf = row["Performance"];
      acc[perf] = (acc[perf] || 0) + 1;
      return acc;
    },
    {}
  );

  const missedOpportunity = data.reduce((acc: number, row: any) => {
    return row["Performance"] === "Under Performed"
      ? acc + (row["Predicted Total Payments"] - row["Total Payments"])
      : acc;
  }, 0);

  const handleExport = () => {
    const summaryData = Object.entries(diagnosticCounts).map(([label, count]) => ({
      Category: label,
      Count: count
    }));
    summaryData.push({ Category: "Missed Revenue Opportunity", Count: missedOpportunity });
    downloadCSV(summaryData, "summary_insights.csv");
  };

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-2">Summary Insights</h2>
      <ul className="space-y-1">
        {Object.entries(diagnosticCounts).map(([label, count]) => (
          <li key={label}>
            {label}: {count} week{count > 1 ? "s" : ""}
          </li>
        ))}
        <li className="text-red-500">
          Missed Revenue Opportunity: ${missedOpportunity.toLocaleString()}
        </li>
      </ul>
      <Button onClick={handleExport} className="mt-4">Export Summary</Button>
    </Card>
  );
}
