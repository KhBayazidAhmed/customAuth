"use client";

import { signOut } from "@/actions";
import { useEffect } from "react";

export default function LogoutButton() {
  useEffect(() => {
    console.log("run once");
  });
  return (
    <button
      onClick={async () => {
        let res = await signOut();
        if (res.response) {
          window.location.reload();
        }
      }}
      href="logout"
      className="bg-red-600 rounded p-2 text-white hover:text-gray-300"
    >
      Log out
    </button>
  );
}
