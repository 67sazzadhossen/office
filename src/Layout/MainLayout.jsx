"use client";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import useLoadData from "@/Hooks/useLoadData";

const MainLayout = ({ children }) => {
  const [, , nav = isLoading] = useLoadData("navbar");
  const [, , banner = isLoading] = useLoadData("banner");

  return (
    <div className={"scroll-smooth"}>
      {nav || banner ? (
        <div className="min-h-screen flex justify-center items-center bg-black text-white">
          <span className="loading loading-infinity w-36"></span>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
          <div className="">{children}</div>
          <footer>Footer</footer>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
