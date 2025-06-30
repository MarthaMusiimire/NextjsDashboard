"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to My Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Manage your reports, users, and settings all in one place.
        </p>

        <div className="space-x-4">
          <Button onClick={() => router.push("/login")}>Login</Button>
          <Button variant="outline" onClick={() => router.push("/signup")}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
