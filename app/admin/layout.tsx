import Link from "next/link";
import { LogoutButton } from "@/components/LogoutButton";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 bg-[#16357A] text-white px-6 py-8 h-screen sticky top-0 flex flex-col">
        <div>
        <h2 className="text-2xl font-bold mb-8">SankalpHub</h2>

        <nav className="space-y-3">
          <Link href="/admin/dashboard" className="block hover:text-gray-300">Dashboard</Link>
          <Link href="/admin/internmanagement" className="block hover:text-gray-300">Intern Management</Link>
          <Link href="/admin/notes" className="block hover:text-gray-300">Notes</Link>
          <Link href="/admin/assignments" className="block hover:text-gray-300">Assignments</Link>
          <Link href="/admin/submissions" className="block hover:text-gray-300">Submissions</Link>
          <Link href="/admin/review" className="block hover:text-gray-300">Analytics</Link>
        </nav>
        </div>
        <div className="flex-1" />
        <div className="">
          <LogoutButton />
        </div>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>

    </div>
  );
}