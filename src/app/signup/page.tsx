"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      console.log("Signup success", res.data);
      toast.success("Signup success");
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full">
      <pre className="mb-4">{loading ? "Loading" : "Signup"}</pre>
      <pre data-prefix=">" className="text-warning">
        <code>
          <input
            id="username"
            type="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
            className="input w-fit max-w-xs bg-transparent p-0 mb-2"
          />
        </code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            className="input w-fit max-w-xs bg-transparent p-0 mb-2"
          />
        </code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            className="input w-fit max-w-xs bg-transparent p-0"
          />
        </code>
      </pre>
      <pre data-prefix="#" className="text-accent">
        <code>
          <button
            onClick={onSignup}
            // className={`mt-2 ${buttonDisabled ? "btn-disabled" : ""} `}
            className={`mt-2 p-1 pl-2 pr-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600`}
          >
            Signup
          </button>
        </code>
      </pre>
      <pre
        data-prefix="~"
        className="bg-warning text-warning-content mt-5 text-sm"
      >
        <code>
          Already have an account!{" "}
          <Link href="/signup" className="cursor-pointer underline">
            Login
          </Link>
        </code>
      </pre>
    </div>
  );
}
