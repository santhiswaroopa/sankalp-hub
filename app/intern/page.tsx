"use client";

import { useState } from "react";

export default function InternPage() {
  const [view, setView] = useState<
    "dashboard" | "notes" | "assignments" | "submit" | "feedback"
  >("dashboard");

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white px-6 py-8">
        <h2 className="text-2xl font-bold mb-8">Intern Panel</h2>

        <nav className="space-y-3">
          {[
            ["dashboard", "Dashboard"],
            ["notes", "Notes"],
            ["assignments", "Assignments"],
            ["submit", "Submit Work"],
            ["feedback", "Feedback"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setView(key as any)}
              className={`w-full text-left px-3 py-2 rounded ${
                view === key
                  ? "bg-white text-green-700 font-semibold"
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
            <h1 className="text-3xl font-bold mb-6">Intern Dashboard</h1>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded shadow">Completed: 8</div>
              <div className="bg-white p-6 rounded shadow">Pending: 3</div>
            </div>
          </>
        )}

        {/* NOTES */}
        {view === "notes" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Notes</h1>
            <p>GitHub Notes, React Notes</p>
          </div>
        )}

        {/* ASSIGNMENTS */}
        {view === "assignments" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Assignments</h1>
            <p>Build Landing Page</p>
          </div>
        )}

        {/* SUBMIT */}
        {view === "submit" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Submit Work</h1>

            <input
              placeholder="GitHub Link"
              className="border p-2 mt-2"
            />
            <button className="bg-green-600 text-white px-4 py-2 mt-3">
              Submit
            </button>
          </div>
        )}

        {/* FEEDBACK */}
        {view === "feedback" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Feedback</h1>
            <ul>
              <li>Improve UI</li>
              <li>Good work</li>
            </ul>
          </div>
        )}

      </main>
    </div>
  );
}