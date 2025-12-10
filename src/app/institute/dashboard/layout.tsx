import Dashboard from "@/lib/components/dashboard/Dashboard";

export default function InstituteDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col">
      <Dashboard>
        {children}
      </Dashboard>
    </div>
  );
}
