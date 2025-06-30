import { LucideIcon } from "lucide-react";



interface CircleStatCardProps {
  label: string;
  value: string;
  color?: string;
  icon?: LucideIcon; // the question mark means its optional and can be left out
}

export default function CircleStatCard({
  label,
  value,
  color = "bg-blue-500", // which is why i set out a default color here then tested it out in my PAGE file on two components.
  icon: Icon, // <- grab the icon from props 
}: CircleStatCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md ${color}`}
      >
        {Icon ? <Icon className="w-6 h-6" /> : value}
        
      </div>
      <p className="text-sm text-gray-700">{label}</p>
    </div>
  );
}