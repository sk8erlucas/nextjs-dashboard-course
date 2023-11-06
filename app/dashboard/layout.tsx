import Link from "next/link";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-screen bg-gray-200">
        <div className="p-4 space-y-4 bg-blue-500 w-64 h-full text-white">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav>
            <ul className="space-y-2">
              <li><Link href="/dashboard/customers">Customers</Link></li>
              <li><Link href="/dashboard/invoices">Invoices</Link></li>
            </ul>
          </nav>
        </div>
        <div className="flex-grow p-4 overflow-auto">{children}</div>
      </div>
    );
  }