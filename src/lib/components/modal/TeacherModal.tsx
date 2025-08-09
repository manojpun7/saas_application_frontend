"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchCategories } from "@/lib/store/institute/category/categorySlice";
import { fetchInstituteCourse } from "@/lib/store/institute/course/institute-course-slice";
import { createInstituteTeacher } from "@/lib/store/institute/teacher/institute-teacher-slice";
import { IInstituteTeacherPostData } from "@/lib/store/institute/teacher/institute-teacher-type";
import { Status } from "@/lib/types/type";
import React, { ChangeEvent, useEffect, useState } from "react";

interface ICloseModal {
  closeModal: () => void;
}

const TeacherModal: React.FC<ICloseModal> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((store) => store.teacher);
  const isLoading = status === Status.LOADING;
  const { courses } = useAppSelector((store) => store.course);
  const [teacherData, setTeacherData] = useState<IInstituteTeacherPostData>({
    teacherName: "",
    teacherEmail: "",
    teacherPhoneNumber: "",
    teacherExperience: "",
    teacherJoinedDate: "",
    teacherSalary: "",
    teacherPhoto: null,
    courseId: "",
  });
  const handleTeacherChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      //@ts-ignore
      [name]: name === "teacherPhoto" ? e.target.files[0] : value,
    });
  };
  const handleTeacherSubmission = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(createInstituteTeacher(teacherData));
    if (status === Status.SUCCESS) {
      closeModal();
    }
  };
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchInstituteCourse());
    }
  }, []);

  console.log(teacherData);
  return (
    <div
      id="modal"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black/50" />
      <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Create Teacher
          </h3>
          <button
            onClick={closeModal}
            id="closeModalButton"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              className="h-4 w-4 inline-block ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleTeacherSubmission} className="space-y-4">
          <div>
            <label
              htmlFor="website_url"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Teacher Name
            </label>
            <input
              name="teacherName"
              onChange={handleTeacherChange}
              type="text"
              id="website_url"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Hari Bahadur"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website_url"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Teacher Email
            </label>
            <input
              name="teacherEmail"
              onChange={handleTeacherChange}
              type="email"
              id="website_url"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Harib@gmail.com"
              required
            />
          </div>

          <div className="flex justify-between ">
            <div>
              <label
                htmlFor="website_url"
                className=" block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Teacher Photo
              </label>
              <input
                name="teacherPhoto"
                onChange={handleTeacherChange}
                type="file"
                id="website_url"
                className="w-48 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="2+ months, years "
                required
              />
            </div>
            <div>
              <label
                htmlFor="website_url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Teacher Phone Number
              </label>
              <input
                name="teacherPhoneNumber"
                onChange={handleTeacherChange}
                type="text"
                id="website_url"
                className="w-48 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="98xxxxxxxx"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <label
                htmlFor="website_url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Teacher Experience
              </label>
              <input
                name="teacherExperience"
                onChange={handleTeacherChange}
                type="text"
                id="website_url"
                className="w-48 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="eg. 1.5years"
                required
              />
            </div>
            <div>
              <label
                htmlFor="website_url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Teacher Joined Date
              </label>
              <input
                name="teacherJoinedDate"
                onChange={handleTeacherChange}
                type="date"
                id="website_url"
                className="w-48 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="98xxxxxxxx"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <label
                htmlFor="website_url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Teacher Salary
              </label>
              <input
                name="teacherSalary"
                onChange={handleTeacherChange}
                type="text"
                id="website_url"
                className="w-48 h-10 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="eg. 20k"
                required
              />
            </div>
            <div>
              <label
                htmlFor="website_url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Choose Course
              </label>
              <select
                onChange={handleTeacherChange}
                className="w-48 h-10 border mt-1 border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                name="courseId"
                id=""
              >
                {courses.map((course) => {
                  return (
                    <option
                      className="text-gray-300 bg-gray-800"
                      key={course.id}
                      value={course.id}
                    >
                      {course.courseName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              disabled={isLoading}
              onClick={closeModal}
              id="cancelButton"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              disabled={isLoading}
              id="submitUrlButton"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-violet-600"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Adding...
                </>
              ) : (
                <>
                  Add Teacher
                  <svg
                    className="h-4 w-4 inline-block ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherModal;
