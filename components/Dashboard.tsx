import { useState } from 'react';
import { Card } from '@/components/ui/card';
import SummaryInsights from './SummaryInsights';
import DiagnosticsTable from './DiagnosticsTable';
import PerformanceLineChart from './PerformanceLineChart';
import ReasonFrequencyChart from './ReasonFrequencyChart';
import RecommendedActions from './RecommendedActions';

export default function Dashboard() {
  const [data, setData] = useState<any[]>([]);

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">AFC Revenue Performance Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <SummaryInsights data={data} />
        </Card>
        
        <Card className="p-4">
          <PerformanceLineChart data={data} />
        </Card>
      </div>

      <Card className="p-4">
        <DiagnosticsTable data={data} />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <ReasonFrequencyChart data={data} />
        </Card>
        
        <Card className="p-4">
          <RecommendedActions data={data} />
        </Card>
      </div>
    </div>
  );
} 