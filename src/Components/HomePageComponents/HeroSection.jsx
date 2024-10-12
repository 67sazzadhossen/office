"use client";
import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import Modal from "../Modals/Modal";
import Image from "next/image";
import bg from "../../../Public/assets/Ripple.svg";

import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import CLOUDS from "vanta/dist/vanta.globe.min.js";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const HeroSection = () => {
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       CLOUDS({
  //         el: myRef.current,
  //         THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0x66595e,
  //         color2: 0x756363,
  //         size: 1.2,
  //         backgroundColor: 0xcfcbd7,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  const { isAdmin } = useLoggedUser();
  const [data, refetch] = useLoadData("banner");
  console.log(data?.data[0]);
  return (
    <div
      // ref={myRef}
      style={{
        backgroundImage: 'url("/assets/Ripple.svg")',
      }}
      className={
        "min-h-screen flex justify-center items-center bg-no-repeat bg-cover"
      }
    >
      <div
        className={
          "flex flex-col-reverse lg:flex-row items-center lg:gap-24 lg:max-w-[80%] lg:mx-auto px-3 lg:px-0"
        }
      >
        <div className={"w-full lg:w-2/3 space-y-4"}>
          <h1 className={"lg:text-5xl text-2xl font-bold leading-snug"}>
            {data?.data[0].title}
          </h1>
          <button className={"btn btn-outline"}>Start a project with us</button>
          {isAdmin && (
            <div className={"lg:absolute mt-6 lg:mt-0 bottom-16 z-10"}>
              <Modal
                apiName="banner"
                buttonName={"Update Banner"}
                id={"updateBannerModal"}
                loadedImage={data?.data[0]?.image}
                loadedTitle={data?.data[0]?.title}
                refetch={refetch}
                heading={"Customize Your Banner"}
                input={["description"]}
              ></Modal>
            </div>
          )}
        </div>
        <div className={"lg:w-2/3 "}>
          <Image
            className={"rounded-3xl "}
            src={
              "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/335c79145455835.629ef2634f695.png"
            }
            alt={"Hero Image"}
            width={1200}
            height={600}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
