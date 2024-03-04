"use client";
import { useFormStatus } from "react-dom";
export default function FromButton({ name }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      {pending ? "updating..." : name}
    </button>
  );
}
