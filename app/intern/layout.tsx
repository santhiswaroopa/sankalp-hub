import Link from "next/link";
import { LogoutButton } from "@/components/LogoutButton";
export default function InternLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      {/* Sticky Sidebar */}
      <aside className="w-64 bg-blue-900 text-white px-6 py-8 h-screen sticky top-0 flex flex-col">
        <div>
        <h2 className="text-2xl font-bold mb-8">Intern Panel</h2>

        <nav className="space-y-3">
          <Link href="/intern/dashboard" className="block hover:text-gray-200">
            Dashboard
          </Link>

          <Link href="/intern/notes" className="block hover:text-gray-200">
            Notes
          </Link>

          <Link href="/intern/assignments" className="block hover:text-gray-200">
            Assignments
          </Link>

          <Link href="/intern/submit" className="block hover:text-gray-200">
            Submit Work
          </Link>

          <Link href="/intern/feedback" className="block hover:text-gray-200">
            Feedback
          </Link>
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