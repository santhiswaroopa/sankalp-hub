import { submissions } from "@/data/mock";

export default function Submissions() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Submissions</h1>

      <ul className="mt-4">
        {submissions.map((s, i) => (
          <li key={i}>
            {s.intern} - {s.task} - {s.status}
          </li>
        ))}
      </ul>
    </div>
  );
}