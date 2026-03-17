import Link from "next/link";

export default function InternLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      {/* <aside className="w-64 bg-green-700 text-white px-6 py-8 h-screen sticky top-0">
        <h2 className="text-2xl font-bold mb-8">Intern Panel</h2>

        <nav className="space-y-3">
          <Link href="/intern/dashboard" className="block hover:text-gray-300">Dashboard</Link>
          <Link href="/intern/notes" className="block hover:text-gray-300">Notes</Link>
          <Link href="/intern/assignments" className="block hover:text-gray-300">Assignments</Link>
          <Link href="/intern/submit" className="block hover:text-gray-300">Submit Work</Link>
          <Link href="/intern/feedback" className="block hover:text-gray-300">Feedback</Link>
        </nav>
      </aside> */}

      {/* Page Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>

    </div>
  );
}