"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.reponse.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <pre className="text-4xl mb-4">Verify Email</pre>
      <pre className="p-2 mb-4 bg-orange-500 rounded-lg text-black">
        {token ? `${token}` : "no token"}
      </pre>

      {verified && (
        <div>
          <pre className="text-2xl  bg-green-500">Email Verified</pre>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <pre className="text-2xl items-center bg-red-500 rounded-lg text-black">Error</pre>
        </div>
      )}
    </div>
  );
}
