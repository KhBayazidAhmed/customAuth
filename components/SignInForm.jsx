"use client";
import { signIn } from "@/actions";
import FromButton from "./fromButton";
import { useState } from "react";

export default function SignInForm() {
  const [response, setResponse] = useState({});
  async function handleForm(formData) {
    let res = await signIn(formData);
    if (res.response) {
      setResponse(JSON.parse(res.data));
    }
  }
  return (
    <form action={handleForm}>
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
      <FromButton name={"Sign In"} />
    </form>
  );
}
