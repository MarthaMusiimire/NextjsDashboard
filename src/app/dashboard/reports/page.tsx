import { Card, CardContent } from "@/components/ui/card";
import { FileBarChart, Users, DollarSign } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Charts from "@/components/Charts";




const reportRows = [
  { id: "RPT001", name: "Monthly Sales", status: "Completed", date: "2025-06-25" },
  { id: "RPT002", name: "User Signup Trends", status: "In Progress", date: "2025-06-24" },
  { id: "RPT003", name: "Revenue Breakdown", status: "Completed", date: "2025-06-22" },
];
const summaryData = [
  {
    title: "Monthly Users",
    value: "1,230",
    icon: Users,
  },
  {
    title: "Monthly Revenue ",
    value: "$12,450",
    icon: DollarSign,
  },
  {
    title: "Reports Generated",
    value: "58",
    icon: FileBarChart,
  },
];

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Reports Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {summaryData.map((item, index) => (
          <Card key={index}>
            <CardContent className="flex items-center gap-4 p-4">
              <item.icon className="w-6 h-6 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-xl font-semibold">{item.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

       <Charts />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
        <Table>
            <TableHeader>
            <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Report Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
            </TableRow>
            </TableHeader>
                <TableBody>
            {reportRows.map((report) => (
                <TableRow key={report.id}>
                <TableCell>{report.id}</TableCell>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.status}</TableCell>
                <TableCell>{report.date}</TableCell>
                </TableRow>
            ))}
                </TableBody>
            </Table>
        </div>

       
    </div>
  );
}

