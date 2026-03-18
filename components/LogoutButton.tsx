"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
    >
      Logout
    </button>
  );
}