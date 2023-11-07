import Link from "next/link";
import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-64 h-full bg-blue-500 text-black">
        <SideNav />
      </div>
      <div className="flex-grow p-4 overflow-auto">{children}</div>
    </div>
  );
}