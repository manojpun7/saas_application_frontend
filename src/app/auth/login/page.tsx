"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { ILoginData } from "./login.types";
import { loginUser } from "@/lib/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { Status } from "@/lib/types/type";

const Login = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((store) => store.auth);

  const [data, setData] = useState<ILoginData>({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleLoginDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLoginSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(""); // clear any previous messages
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (status === Status.SUCCESS) {
      setMessage("Logged in successfully!");
      setData({ email: "", password: "" });

      // Optionally, hide the message after 4 seconds
      const timer = setTimeout(() => {
        setMessage("");
      }, 4000);

      return () => clearTimeout(timer);
    } else if (status === Status.ERROR) {
      setMessage("Login failed. Please try again.");
    }
  }, [status, dispatch]);

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <Image
            className="mx-auto h-12 w-auto"
            src="https://www.svgrepo.com/show/499664/user-happy.svg"
            alt="emoji"
            width={2}
            height={2}
          />

          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Login for an account
          </h2>

          <form onSubmit={handleLoginSubmission} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                onChange={handleLoginDataChange}
                name="email"
                value={data.email}
                type="email"
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                onChange={handleLoginDataChange}
                name="password"
                value={data.password}
                type="password"
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
              {status === Status.LOADING ? "Logging in..." : "Login"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-center text-sm ${
                status === Status.SUCCESS ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-center text-sm text-gray-600 mt-4">
            Not registered yet?{" "}
            <Link href="/auth/register" className="text-sky-500 font-medium hover:underline">
              Click here to sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
