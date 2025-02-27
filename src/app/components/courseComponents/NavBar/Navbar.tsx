import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="navbar bg-primary text-primary-content text-xl">
      <button
        className="btn btn-ghost text-2xl"
        onClick={() => router.push("/info")}
      >
        OfCourse
      </button>
    </div>
  );
};

export default Navbar;
