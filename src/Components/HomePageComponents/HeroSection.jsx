"use client";
import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import Modal from "../Modals/Modal";
import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.net.min.js";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const HeroSection = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2555d2,
          backgroundColor: 0xdad4e3,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const { isAdmin } = useLoggedUser();
  const [data, refetch] = useLoadData("banner");
  console.log(data?.data[0]);
  return (
    <div
      ref={myRef}
      // style={{
      //   backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/023/870/823/non_2x/abstract-backdrop-with-colorful-wave-gradient-lines-on-white-background-modern-technology-background-wave-design-illustration-vector.jpg")`,
      // }}
      className={"min-h-screen flex justify-center items-center "}
    >
      <div>{data?.data[0].title}</div>
      <div>
        <Image
          src={data.data[0].image}
          alt={"Hero Image"}
          width={600}
          height={600}
        ></Image>
      </div>
    </div>
  );
};

export default HeroSection;
