import { assignments } from "@/data/mock";

export default function Assignments() {
  return (
    <div className="p-6">
      <h1>Assignments</h1>

      {assignments.map((a, i) => (
        <p key={i}>{a.title}</p>
      ))}
    </div>
  );
}