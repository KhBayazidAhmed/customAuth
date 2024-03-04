import { navItems } from "@/constant";
import Link from "next/link";
import NavLogoutButtonArea from "./NavLogoutButtonArea";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white cursor-pointer font-semibold uppercase text-lg mr-4">
            <Link href="/">Custom auth</Link>
          </span>
          <ul className="hidden md:flex space-x-4">
            {navItems.map((items) => (
              <li key={items.name}>
                <Link
                  href={items.path}
                  className="text-white hover:text-gray-300"
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4">
            <NavLogoutButtonArea />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
