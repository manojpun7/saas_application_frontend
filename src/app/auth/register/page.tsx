"use client";

import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { IRegisterData } from "./register.types";
import { registerUser } from "@/lib/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { Status } from "@/lib/types/type";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Register = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { status } = useAppSelector((store) => store.auth);

  const [data, setData] = useState<IRegisterData>({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleRegisterDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleRegisterSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(data));
  };

  // Watch for status changes
  useEffect(() => {
    if (status === Status.SUCCESS) {
      setMessage("Registered successfully! Redirecting to login...");
      setData({ username: "", email: "", password: "" }); // Clear form

      const timer = setTimeout(() => {
        router.push("/auth/login");
      }, 4000);

      return () => clearTimeout(timer);
    } else if (status === Status.ERROR) {
      setMessage("Registration failed. Please try again.");
    }
  }, [status, router]);

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <Image
            className="mx-auto h-12 w-auto"
            src="https://www.svgrepo.com/show/499664/user-happy.svg"
            alt=""
            height={2}
            width={2}
          />
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>

          <form onSubmit={handleRegisterSubmission} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                onChange={handleRegisterDataChange}
                name="username"
                value={data.username}
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                onChange={handleRegisterDataChange}
                name="email"
                type="email"
                value={data.email}
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                onChange={handleRegisterDataChange}
                name="password"
                type="password"
                value={data.password}
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              disabled={status === Status.LOADING}
            >
              {status === Status.LOADING ? "Registering..." : "Register Account"}
            </button>
          </form>

          {/* Message */}
          {message && (
            <p
              className={`mt-4 text-center text-md ${
                status === Status.SUCCESS ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          {/* Login Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-sky-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
