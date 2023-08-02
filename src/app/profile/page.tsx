"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <pre className="mb-4">Profile</pre>
      <pre className="p-2  text-green-500">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </pre>
      <hr />
      <pre data-prefix="#" className="text-accent">
        <code>
          <button
            onClick={logout}
            className={`mt-2 p-1 pl-2 pr-2 border border-red-800 rounded-lg mb-4 focus:outline-none focus:border-gray-600`}
          >
            Logout
          </button>
        </code>
      </pre>
      <pre data-prefix="#" className="text-accent">
        <code>
          <button
            onClick={getUserDetails}
            className={`mt-2 p-1 pl-2 pr-2 border border-green-800 rounded-lg mb-4 focus:outline-none focus:border-gray-600`}
          >
            GetUser Details
          </button>
        </code>
      </pre>
    </div>
  );
}
