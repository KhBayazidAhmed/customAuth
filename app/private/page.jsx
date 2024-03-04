import Navbar from "@/components/Navbar";
import Image from "next/image";
import privateImage from "@/public/private.gif";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center -mt-16 h-full items-center ">
        <div className="text-center flex flex-col items-center">
          <Image src={privateImage} alt="private Icon" />
          <p className="text-xl font-semibold mb-4">
            You are in a private page
          </p>
        </div>
      </div>
    </div>
  );
}
