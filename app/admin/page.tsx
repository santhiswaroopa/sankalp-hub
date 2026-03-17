"use client";

import { useState } from "react";

export default function AdminPage() {
  const [view, setView] = useState<
    "dashboard" | "interns" | "notes" | "assignments" | "submissions" | "analytics"
  >("dashboard");

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-[#16357A] text-white px-6 py-8">
        <h2 className="text-2xl font-bold mb-8">SankalpHub</h2>

        <nav className="space-y-3">
          {[
            ["dashboard", "Dashboard"],
            ["interns", "Interns"],
            ["notes", "Notes"],
            ["assignments", "Assignments"],
            ["submissions", "Submissions"],
            ["analytics", "Analytics"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setView(key as any)}
              className={`w-full text-left px-3 py-2 rounded ${
                view === key
                  ? "bg-white text-[#16357A] font-semibold"
                  : "hover:text-white/80"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        
        {/* DASHBOARD */}
        {view === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded shadow">Interns: 12</div>
              <div className="bg-white p-6 rounded shadow">Assignments: 24</div>
              <div className="bg-white p-6 rounded shadow">Submissions: 18</div>
            </div>
          </>
        )}

        {/* INTERNS */}
        {view === "interns" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Intern Management</h1>
            <ul>
              <li>Karthik - 80%</li>
              <li>Sowmya - 90%</li>
            </ul>
          </div>
        )}

        {/* NOTES */}
        {view === "notes" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Notes</h1>
            <p>Upload and manage learning materials</p>
          </div>
        )}

        {/* ASSIGNMENTS */}
        {view === "assignments" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Assignments</h1>
            <p>React Task - Pending</p>
          </div>
        )}

        {/* SUBMISSIONS */}
        {view === "submissions" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Submissions</h1>
            <p>Karthik - UI Task - Reviewed</p>
          </div>
        )}

        {/* ANALYTICS */}
        {view === "analytics" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Analytics</h1>
            <p>Progress tracking coming here (chart)</p>
          </div>
        )}

      </main>
    </div>
  );
}