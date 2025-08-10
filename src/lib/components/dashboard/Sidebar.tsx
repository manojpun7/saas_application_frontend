"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar({ closeSidebar }: { closeSidebar: () => void }) {
  const pathname = usePathname();
  const links = [
    { href: "/institute/dashboard", label: "Dashboard" },
    { href: "/institute/dashboard/student", label: "Student" },
     { href: "/institute/dashboard/course", label: "Course" },
    { href: "/institute/dashboard/teacher", label: "Teacher" },
    { href: "/institute/dashboard/categories", label: "Categories" },
    { href: "/institute/dashboard/reports", label: "Reports" },
  ];

  return (
    <nav className="mt-5 px-2">
      {links.map(({ href, label }) => {
        const isActive = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={closeSidebar}
            className={`mt-1 block px-2 py-2 text-base font-medium rounded-md ${
              isActive
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Sidebar;
