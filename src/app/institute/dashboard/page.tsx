"use client"

import React from 'react';
// Assuming lucide-react is available for icons
import { Users, BookOpen, TrendingUp, BarChart, MoreVertical, ChevronDown, } from 'lucide-react';

// --- Type Definitions ---

interface MetricData {
    title: string;
    value: number;
    icon: React.ElementType;
    bgColor: string;
    textColor: string;
}

interface Trainer {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Course {
    name: string;
    lessons: number;
}

interface Student {
    id: number;
    name: string;
    status: 'Enrolled' | 'Active now' | 'Unrolled';
    course: string;
    enrolledDate: string;
    progress: number; // 0-100
}

// --- Mock Data ---

const METRICS: MetricData[] = [
    { title: "Total User", value: 2201, icon: Users, bgColor: 'bg-white', textColor: 'text-gray-900' },
    { title: "Total Students", value: 1901, icon: Users, bgColor: 'bg-green-100', textColor: 'text-green-700' },
    { title: "New Students", value: 1001, icon: Users, bgColor: 'bg-pink-100', textColor: 'text-pink-700' },
    { title: "Trained Students", value: 881, icon: Users, bgColor: 'bg-yellow-100', textColor: 'text-yellow-700' },
];

const ACTIVE_TRAINERS: Trainer[] = [
    { name: "Aruvi", role: "Full Stack Developer", avatarUrl: "https://placehold.co/40x40/6366f1/ffffff?text=A" },
    { name: "Saranya", role: "Front-End Development", avatarUrl: "https://placehold.co/40x40/ef4444/ffffff?text=S" },
    { name: "Bala", role: "UI/UX Designer", avatarUrl: "https://placehold.co/40x40/3b82f6/ffffff?text=B" },
    { name: "Saranya", role: "Front-End Development", avatarUrl: "https://placehold.co/40x40/ef4444/ffffff?text=S" },
];

const ACTIVE_COURSES: Course[] = [
    { name: "UI/UX Design", lessons: 12 },
    { name: "Full Stack Development", lessons: 90 },
    { name: "Front-End Development", lessons: 30 },
];

const STUDENT_DETAILS: Student[] = [
    { id: 1, name: "Vijayabala", status: 'Enrolled', course: "UI/UX Design", enrolledDate: "12/04/2023", progress: 85 },
    { id: 2, name: "Praveen", status: 'Enrolled', course: "Full Stack Development", enrolledDate: "10/04/2023", progress: 60 },
    { id: 3, name: "Ajith", status: 'Enrolled', course: "Front-End Development", enrolledDate: "09/04/2023", progress: 95 },
    { id: 4, name: "Arun", status: 'Enrolled', course: "Back-End Development", enrolledDate: "25/03/2023", progress: 20 },
    { id: 5, name: "Manokar", status: 'Active now', course: "UI/UX Design", enrolledDate: "20/03/2023", progress: 50 },
    { id: 6, name: "Arun", status: 'Unrolled', course: "Front-End Development", enrolledDate: "01/04/2023", progress: 0 },
];

// Utility function to get status colors
const getStatusColors = (status: Student['status']): { bg: string, text: string } => {
    switch (status) {
        case 'Enrolled':
            return { bg: 'bg-green-100', text: 'text-green-700' };
        case 'Active now':
            return { bg: 'bg-blue-100', text: 'text-blue-700' };
        case 'Unrolled':
            return { bg: 'bg-red-100', text: 'text-red-700' };
        default:
            return { bg: 'bg-gray-100', text: 'text-gray-700' };
    }
};

// --- Components ---

const MetricCard: React.FC<MetricData> = ({ title, value, bgColor }) => (
    <div className={`p-6 rounded-xl shadow-md flex flex-col justify-center items-center ${bgColor} min-w-[150px]`}>
        <p className={`text-3xl font-bold ${title.includes('New') ? 'text-pink-700' : title.includes('Trained') ? 'text-yellow-700' : title.includes('Total Students') ? 'text-green-700' : 'text-gray-900'}`}>{value}</p>
        <p className="text-gray-500 mt-1 text-sm">{title}</p>
    </div>
);

const RevenueChartPlaceholder: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-md h-full">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Revenue</h2>
            <div className="flex items-center text-gray-500 text-sm cursor-pointer hover:text-gray-700">
                <span className="mr-1">Week</span>
                <ChevronDown size={16} />
            </div>
        </div>
        <p className="text-sm text-gray-500 mb-4">Income & Expenses Comparison</p>

        {/* Simulated Line Chart Area */}
        <div className="h-40 relative flex items-end">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-0 bottom-0 text-xs text-gray-400 w-8 flex flex-col justify-between h-full py-1">
                <span>$600.00</span>
                <span>$400.00</span>
                <span>$200.00</span>
                <span>$0.00</span>
            </div>

            {/* Chart Canvas (Simplified SVG/Divs) */}
            <div className="ml-8 w-full h-full border-l border-b border-gray-200 relative">
                {/* Placeholder Lines - Income (Blue) */}
                <div className="absolute inset-0 z-10 opacity-75">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Income Line */}
                        <polyline points="0,90 20,60 40,75 60,30 80,45 100,10" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                        {/* Expense Line (Red) */}
                        <polyline points="0,100 20,85 40,95 60,80 80,90 100,75" fill="none" stroke="#ef4444" strokeWidth="1.5" />
                    </svg>
                </div>

                {/* X-Axis Labels (Day/Month) */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <span key={day} className="w-1/7 text-center">{day}</span>
                    ))}
                </div>
            </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center space-x-6 text-sm">
            <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                Income
            </div>
            <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                Expenses
            </div>
        </div>
    </div>
);

const PlacementChartPlaceholder: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-md h-full">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Placement Data</h2>
            <div className="flex items-center text-gray-500 text-sm cursor-pointer hover:text-gray-700">
                <span className="mr-1">2023</span>
                <ChevronDown size={16} />
            </div>
        </div>
        <p className="text-sm text-gray-500 mb-4">Placed Students: 1850</p>

        {/* Simulated Bar Chart Area */}
        <div className="h-56 flex relative pt-2">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-0 bottom-0 text-xs text-gray-400 w-8 flex flex-col justify-between h-full py-1">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
            </div>

            {/* Chart Canvas (Simulated Bars) */}
            <div className="ml-8 w-full h-full border-l border-b border-gray-200 flex justify-around items-end space-x-2">
                {/* Month data: Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec */}
                {[
                    { month: 'Jan-Mar', placed: 320, visited: 280 },
                    { month: 'Apr-Jun', placed: 380, visited: 300 },
                    { month: 'Jul-Sep', placed: 250, visited: 400 },
                    { month: 'Oct-Dec', placed: 350, visited: 250 },
                ].map(({ placed, visited }, index) => (
                    <div key={index} className="flex h-full w-1/4 items-end justify-center">
                        {/* Placed Students (Blue) */}
                        <div
                            className="w-5 bg-indigo-500 rounded-t-md mr-1 transition-all duration-300"
                            style={{ height: `${(placed / 400) * 100}%` }}
                        />
                        {/* Companies Visited (Red) */}
                        <div
                            className="w-5 bg-red-500 rounded-t-md transition-all duration-300"
                            style={{ height: `${(visited / 400) * 100}%` }}
                        />
                    </div>
                ))}
            </div>
        </div>
        {/* X-Axis Labels */}
        <div className="ml-8 flex justify-around text-xs text-gray-500 mt-1">
            {['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'].map(month => (
                <span key={month} className="w-1/4 text-center">{month}</span>
            ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex justify-center space-x-6 text-sm">
            <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                No. of Students Placed
            </div>
            <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                No. of Companies Visited
            </div>
        </div>
    </div>
);

const TrainerList: React.FC<{ trainers: Trainer[] }> = ({ trainers }) => (
    <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Trainers</h2>
        <div className="space-y-4">
            {trainers.map((trainer, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition duration-150">
                    <div className="flex items-center">
                        <img src={trainer.avatarUrl} alt={trainer.name} className="w-10 h-10 rounded-full object-cover mr-3" onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "https://placehold.co/40x40/cccccc/000000?text=U"; }} />
                        <div>
                            <p className="font-medium text-gray-800">{trainer.name}</p>
                            <p className="text-sm text-gray-500">{trainer.role}</p>
                        </div>
                    </div>
                    <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
                </div>
            ))}
        </div>
        <div className="flex justify-between items-center mt-4 border-t pt-4 text-xs font-semibold text-gray-500">
            <span>Sun Mon Tue Wed Thu Fri Sat</span>
            <div className="flex space-x-2">
                {[22, 23, 24, 25, 26, 27, 28].map(day => (
                    <span key={day} className={`w-6 h-6 flex items-center justify-center rounded-full ${day === 26 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-100'}`}>{day}</span>
                ))}
            </div>
        </div>
    </div>
);

const CourseList: React.FC<{ courses: Course[] }> = ({ courses }) => (
    <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Active Courses</h2>
            <a href="#" className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition duration-150">See all</a>
        </div>
        <div className="space-y-4">
            {courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg border-b last:border-b-0">
                    <div className="flex items-center">
                        <BookOpen className="text-indigo-500 w-6 h-6 mr-3" />
                        <div>
                            <p className="font-medium text-gray-800">{course.name}</p>
                            <p className="text-sm text-gray-500">{course.lessons} Lessons</p>
                        </div>
                    </div>
                    <a href="#" className="text-sm text-indigo-500 hover:text-indigo-700 transition duration-150">View More</a>
                </div>
            ))}
        </div>
    </div>
);

const WebinarCard: React.FC = () => (
    <div className="bg-indigo-700 p-6 rounded-xl shadow-lg relative overflow-hidden">
        <img
            src="https://placehold.co/300x150/4f46e5/ffffff?text=Webinar+Image"
            alt="Webinar promotional"
            className="w-full h-32 object-cover rounded-md mb-4"
            onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "https://placehold.co/300x150/4f46e5/ffffff?text=Webinar+Image"; }}
        />
        <h3 className="text-white text-lg font-bold mb-2">Webinar</h3>
        <p className="text-indigo-200 text-sm mb-4">Turn Your IT Strategy Into Reality With an Execution Blueprint</p>
        <div className="flex justify-between text-indigo-300 text-xs font-medium">
            <div className="flex items-center">
                <TrendingUp size={14} className="mr-1" />
                30 Minutes Duration
            </div>
            <div className="flex items-center">
                <BarChart size={14} className="mr-1" />
                04 June 2023 Date
            </div>
        </div>
    </div>
);

const StudentDetailsTable: React.FC<{ students: Student[] }> = ({ students }) => (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Student Details</h2>
            <a href="#" className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition duration-150">See all</a>
        </div>

        {/* Filter/View Tabs */}
        <div className="flex text-sm border-b border-gray-200 mb-4">
            {['View all', 'Enrolled', 'Active now', 'Unrolled'].map((tab) => (
                <button key={tab} className={`px-4 py-2 font-medium transition duration-150 ${tab === 'View all' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
                    {tab}
                </button>
            ))}
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-7 gap-4 pb-2 border-b text-sm font-semibold text-gray-500">
            <div className="col-span-1">Students</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-2">Course</div>
            <div className="col-span-1">Enrolled</div>
            <div className="col-span-1">Progress</div>
            <div className="col-span-1 text-right">Action</div>
        </div>

        {/* Table Rows */}
        {students.map((student) => {
            const { bg, text } = getStatusColors(student.status);
            return (
                <div key={student.id} className="grid grid-cols-7 gap-4 py-3 border-b hover:bg-gray-50 transition duration-150 items-center text-sm">
                    <div className="col-span-1 flex items-center">
                        <input type="checkbox" className="mr-2 rounded text-indigo-600 focus:ring-indigo-500" />
                        {student.name}
                    </div>
                    <div className="col-span-1">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${bg} ${text}`}>{student.status}</span>
                    </div>
                    <div className="col-span-2">{student.course}</div>
                    <div className="col-span-1">{student.enrolledDate}</div>
                    <div className="col-span-1">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="h-2.5 rounded-full bg-indigo-500" style={{ width: `${student.progress}%` }}></div>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-end">
                        <MoreVertical size={18} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                    </div>
                </div>
            );
        })}
    </div>
);


// --- Main App Component ---

 const InstituteDashboardHomepage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-['Inter']">
            <h1 className="sr-only">Admin Dashboard</h1>

            {/* 1. Metric Cards Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {METRICS.map((metric, index) => (
                    <MetricCard key={index} {...metric} />
                ))}
            </div>

            {/* 2. Main Content Layout (Two Columns: Main Content & Sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Column (Main Content Area) - Takes 8/12 = 2/3 width on large screens */}
                <div className="lg:col-span-8 space-y-6">

                    {/* Top Charts Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <RevenueChartPlaceholder />
                        <PlacementChartPlaceholder />
                    </div>

                    {/* Student Details Table */}
                    <StudentDetailsTable students={STUDENT_DETAILS} />

                </div>

                {/* Right Column (Sidebar) - Takes 4/12 = 1/3 width on large screens */}
                <div className="lg:col-span-4 space-y-6">

                    {/* Active Trainers */}
                    <TrainerList trainers={ACTIVE_TRAINERS} />

                    {/* Active Courses */}
                    <CourseList courses={ACTIVE_COURSES} />

                    {/* Webinar Card */}
                    <WebinarCard />

                </div>
            </div>
        </div>
    );
};

export default InstituteDashboardHomepage