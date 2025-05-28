// RecommendedActions component

interface DataRow {
  Performance: string;
  Reason?: string;
}

export default function RecommendedActions({ data }: { data: DataRow[] }) {
  const getRecommendations = (data: DataRow[]) => {
    const recommendations: string[] = [];
    
    // Count underperforming weeks
    const underperformingCount = data.filter(row => row.Performance === "Under Performed").length;
    
    if (underperformingCount > 0) {
      recommendations.push(`Address underperformance in ${underperformingCount} week${underperformingCount > 1 ? 's' : ''}`);
    }

    // Add specific recommendations based on reasons
    const reasons = new Set(data.map(row => row.Reason).filter(Boolean));
    reasons.forEach(reason => {
      if (reason) {
        recommendations.push(`Investigate and resolve: ${reason}`);
      }
    });

    return recommendations;
  };

  const recommendations = getRecommendations(data);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Recommended Actions</h2>
      <ul className="list-disc pl-5 space-y-2">
        {recommendations.map((action, index) => (
          <li key={index} className="text-gray-700">{action}</li>
        ))}
      </ul>
    </div>
  );
}
