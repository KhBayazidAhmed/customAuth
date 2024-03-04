"use client";

import { signOut } from "@/actions";
import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  if (loading) return <p className="text-white">Loading...</p>;
  return (
    <button
      onClick={async () => {
        setLoading(true);
        let res = await signOut();
        if (res.response) {
          window.location.reload();
        }
        setLoading(false);
      }}
      href="logout"
      className=" rounded p-2 text-white hover:text-gray-300"
    >
      Log out
    </button>
  );
}
