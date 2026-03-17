export default function Card({ title, value }: any) {
  return (
    <div className="bg-white shadow rounded-xl p-4 w-52">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}