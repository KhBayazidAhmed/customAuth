import Navbar from "@/components/Navbar";
import Image from "next/image";
import publicImage from "@/public/Public.gif";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex justify-center -mt-16 h-full items-center ">
        <div className="text-center flex flex-col items-center">
          <Image src={publicImage} alt="Public Icon" />
          <p className="text-xl font-semibold mb-4">You are in a public page</p>
        </div>
      </div>
    </div>
  );
}
