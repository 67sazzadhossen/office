"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Heading from "../Shared/Heading/Heading";
import Card from "./Card";

const OurServices = () => {
  const services = [
    {
      image:
        "https://lform.com/cms/resources/media/2021/01/custom-web-development-app-1184x694.jpg",
      name: "Web Application Development",
      description:
        "Full-stack web development services using modern frameworks like Next.js, ensuring fast, scalable, and SEO-friendly solutions.",
      offerings: [
        "Custom web solutions tailored to meet specific business needs",
        "Dynamic websites",
        "Complex web portals",
      ],
    },
    {
      image:
        "https://www.xavor.com/wp-content/uploads/2022/01/app-development-transform-business-1.jpg",
      name: "Mobile Application Development",
      description:
        "Cross-platform mobile app development for iOS and Android using technologies like React Native or Flutter to deliver smooth, responsive, and feature-rich mobile applications.",
      offerings: [
        "Cross-platform apps for iOS and Android",
        "Feature-rich, responsive mobile apps",
      ],
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/312882501/original/8cd21693c6c119052412840b9ecc3a2e3510e730/do-web-uiux-design-in-figma.png",
      name: "UI/UX Design",
      description:
        "User-centric design approach to create visually appealing and highly functional interfaces. User-centric design approach to create visually appealing and highly functional interfaces. ",
      offerings: [
        "Designing intuitive and engaging user experiences",
        "Enhancing product usability and customer satisfaction",
      ],
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], ["80%", "130%"]);
  const translateX = useTransform(scrollYProgress, [0.9, 1], ["0", "50px"]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <div className={"relative py-16 lg:py-0"}>
      <motion.div className={"sticky top-20 lg:top-28 text-center"}>
        <motion.div
          style={{
            translateX,
            opacity,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            duration: 1,
          }}
          className={"inline-block"}
        >
          <Heading heading={"Our Services"}></Heading>
        </motion.div>
      </motion.div>
      <div
        ref={container}
        className={"lg:max-w-[90%] lg:mx-auto space-y-16 px-4 lg:px-0"}
      >
        {services.map((service, idx) => {
          const targetScale = 1 - (services.length - idx) * 0.05;
          const range = [idx * 0.25, 1];

          return (
            <Card
              key={idx}
              service={service}
              idx={idx}
              progress={scrollYProgress}
              targetScale={targetScale}
              range={range}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
