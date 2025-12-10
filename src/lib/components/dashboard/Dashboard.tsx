"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md w-64 z-20 fixed top-0 left-0 h-screen
          transform transition-transform duration-300
          sm:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 mt-15 border-b flex items-center justify-between sm:justify-start">
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

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="sm:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar menu: scrollable if content overflows */}
        <div className="overflow-y-auto h-[calc(100vh-64px)] p-2">
          <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-0 sm:ml-64 p-6 overflow-auto">
        {/* Mobile hamburger */}
        <div className="sm:hidden mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

        <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
          {children}
        </div>
      </main>

      {/* Mobile backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
