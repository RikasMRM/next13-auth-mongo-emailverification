"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [user, settUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4">Signup</h1>
      <label htmlFor="username">username</label>
      <input
        className="p-2 mb-2 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600 "
        id="username"
        type="text"
        placeholder="username"
        value={user.username}
        onChange={(e) => settUser({ ...user, username: e.target.value })}
      />
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
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg m-4 focus:outline-none focus:border-gray-600"
      >
        Signup
      </button>
      <p>
        Already have an account!
        <Link href="/login" className="ml-1 underline">
          Login
        </Link>
      </p>
    </div>
  );
}
