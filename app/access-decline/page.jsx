import Navbar from "@/components/Navbar";
import SignInForm from "@/components/SignInForm";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="pt-32 flex justify-center items-center">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Log in <span className="text-red-500"> for Access this page</span>
          </h2>
          <SignInForm />
          <div className="mt-4 text-center">
            <p>Don&rsquo;t have an account?</p>
            <Link href="/sign-up" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
