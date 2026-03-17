import { interns } from "@/data/mock";

export default function Internmanagement() {
  return (
    <div className="p-6">
      <h1 className="font-bold text-xl">Intern Management</h1>

      <ul className="mt-4">
        {interns.map((i) => (
          <li key={i.id}>
            {i.name} - {i.progress}%
          </li>
        ))}
      </ul>
    </div>
  );
}