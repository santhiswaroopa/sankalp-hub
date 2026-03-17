import { assignments } from "@/data/mock";

export default function Assignments() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Assignments</h1>

      <ul className="mt-4">
        {assignments.map((a, i) => (
          <li key={i}>
            {a.title} - {a.status}
          </li>
        ))}
      </ul>
    </div>
  );
}