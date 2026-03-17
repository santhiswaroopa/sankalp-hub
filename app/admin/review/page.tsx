import Chart from "@/components/chart";
import { analyticsData } from "@/data/mock";

export default function Analytics() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Analytics</h1>

      <div className="mt-4">
        <Chart data={analyticsData} />
      </div>
    </div>
  );
}