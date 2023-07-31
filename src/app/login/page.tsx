"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast/headless";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, settUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/users/login", user);
      console.log("Login success", res.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4">{loading ? "Loading" : "Login"}</h1>
      <label htmlFor="email">Email</label>
      <input
        className="p-2 mb-2 text-black border border-gray-300 rounded-lg-mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600 "
        id="email"
        type="text"
        placeholder="email"
        value={user.email}
        onChange={(e) => settUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 mb-4 text-black border border-gray-300 rounded-lg-mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600 "
        id="password"
        type="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => settUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "Can't Login" : "Login"}
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
