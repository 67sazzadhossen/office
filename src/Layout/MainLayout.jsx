"use client";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import useLoadData from "@/Hooks/useLoadData";
import ReactLenis from "lenis/dist/lenis-react";

const MainLayout = ({ children }) => {
  const [, , nav = isLoading] = useLoadData("navbar");
  const [, , banner = isLoading] = useLoadData("banner");

  return (
    <ReactLenis
      root
      options={{
        // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
        lerp: 2,
        // infinite: true,
        syncTouch: true,
      }}
    >
      <div>
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
    </ReactLenis>
  );
};

export default MainLayout;
