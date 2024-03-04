"use client";
import { signUp } from "@/actions";
import FromButton from "./fromButton";
import Link from "next/link";
import { useState } from "react";

export default function SignUpForm() {
  const [response, setResponse] = useState();
  async function handleForm(formData) {
    let res = await signUp(formData);
    if (res.response) {
      setResponse(JSON.parse(res.message));
    }
  }
  return (
    <form action={handleForm}>
      <div className="mb-4">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <h2
        className={`${
          response?.success ? "text-green-500" : "text-red-500"
        } mb-4 text-center`}
      >
        {response?.message}
      </h2>
      <FromButton name={"Sign Up"} />
      <div className="mt-4 text-center">
        <p>Already have an account?</p>
        <Link href="/sign-in" className="text-blue-500 hover:underline">
          Sign In
        </Link>
      </div>
    </form>
  );
}
