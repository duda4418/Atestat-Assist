import Image from "next/image";
import Sidebar from "../SideBar";
import UserProfile from "./userProfile";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="">
        <UserProfile/>
      </div>
    </div>
  );
}
