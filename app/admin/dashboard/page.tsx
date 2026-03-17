import Card from "@/components/card";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>

      <div className="flex gap-4">
        <Card title="Interns" value="12" />
        <Card title="Assignments" value="24" />
        <Card title="Submissions" value="18" />
      </div>
    </div>
  );
}