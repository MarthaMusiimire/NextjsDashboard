"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      router.push("/dashboard/reports");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <h2 className="text-2xl font-bold">Login</h2>
        {error && <p className="text-red-600">{error}</p>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
