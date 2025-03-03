import { SignUpcomp } from "@/component/signup";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[90%] flex justify-center items-center">
      <SignUpcomp />
    </div>
  );
}
