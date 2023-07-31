"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [user, settUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4">Login</h1>
      <label htmlFor="email">Email</label>
      <input
        className="p-2 mb-2 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600 "
        id="email"
        type="text"
        placeholder="email"
        value={user.email}
        onChange={(e) => settUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 mb-4 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600 "
        id="password"
        type="text"
        placeholder="password"
        value={user.password}
        onChange={(e) => settUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login
      </button>
      <p>
        Don&apos;t have an account!
        <Link href="/signup" className="ml-1 underline">
          Signup
        </Link>
      </p>
    </div>
  );
}
