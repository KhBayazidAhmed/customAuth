import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
export default function NavLogoutButtonArea() {
  const login = cookies().get("token");
  return (
    <li>
      {login ? (
        <LogoutButton />
      ) : (
        <Link href="sign-up" className="text-white hover:text-gray-300">
          Sign up / Sign in
        </Link>
      )}
    </li>
  );
}
