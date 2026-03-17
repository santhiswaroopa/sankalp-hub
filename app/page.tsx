import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">SankalpHub</h1>

      <Link href="/login" className="bg-blue-500 text-white px-4 py-2">
        Login
      </Link>
    </div>
  );
}