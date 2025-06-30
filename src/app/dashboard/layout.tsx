import { ReactNode } from "react";
import { Home, FileBarChart, Settings, Users } from "lucide-react";
import Link from "next/link";



export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
        <nav className="space-y-2">
            
            <Link href="/dashboard/reports" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <FileBarChart className="w-5 h-5" />
                <span>Reports</span>
            </Link>
            

            <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
            </a>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </header>

        {children}
      </main>
    </div>
  );
}