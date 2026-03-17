export default function Submit() {
  return (
    <div className="p-6">
      <h1>Submit Work</h1>

      <input placeholder="GitHub Link" className="border p-2 mt-2" />
      <button className="bg-green-500 text-white px-4 py-2 mt-3">
        Submit
      </button>
    </div>
  );
}