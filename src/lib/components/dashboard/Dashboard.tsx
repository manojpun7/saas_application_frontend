"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

function Dashboard({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 flex h-screen relative">
      <aside
        className={`bg-white shadow-md w-64 z-20 transform transition-transform duration-300
          absolute top-0 left-0 h-full
          sm:static sm:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b flex items-center justify-between sm:justify-start">
          <div className="flex items-center">
            <img
              src="https://tailwindflex.com/images/logo.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Dashboard
            </span>
          </div>
          {/* Close button (mobile only) */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="sm:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Hamburger button (mobile only) */}
        <div className="sm:hidden mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="mt-4 p-6 bg-white rounded-lg shadow-md">{children}</div>
      </main>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-10 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;
