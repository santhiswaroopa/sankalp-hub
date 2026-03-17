import Card from "@/components/card";

export default function InternDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Intern Dashboard</h1>

      <div className="flex gap-4">
        <Card title="Completed" value="8" />
        <Card title="Pending" value="3" />
      </div>
    </div>
  );
}