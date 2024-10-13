"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Heading from "../Shared/Heading/Heading";

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
        "User-centric design approach to create visually appealing and highly functional interfaces.",
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

  // Compute transformations outside of the return statement
  const transformations = services.map((service, idx) => {
    const targetScale = 1 - (services.length - idx) * 0.05;
    const range = [idx * 0.25, 1];
    const scale = useTransform(scrollYProgress, range, [1, targetScale]);

    return { scale };
  });

  return (
    <div>
      <div className="sticky top-28 h-[30vh]">
        <Heading heading="Our Services" />
      </div>
      <div ref={container} className="max-w-[90%] mx-auto space-y-16 my-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="h-screen sticky top-0 flex items-center justify-center z-10"
          >
            {/* card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              style={{
                top: `calc(25% + ${idx * 30}px)`,
                scale: transformations[idx].scale,
              }}
              className="w-full p-6 bg-slate-50 lg:p-10 flex flex-col lg:flex-row-reverse gap-16 items-center shadow-lg rounded-2xl h-[500px] absolute border border-gray-200"
            >
              <Image
                className="rounded-2xl"
                src={service.image}
                width={600}
                height={400}
                alt={service.name}
              />
              <div className="space-y-3">
                <h1 className="text-lg font-bold">{service.name}</h1>
                <p>{service.description}</p>
                <ul className="ml-5 flex flex-col lg:flex-row lg:gap-8">
                  {service.offerings.map((offer, idx) => (
                    <li className="list-item list-disc font-md" key={idx}>
                      {offer}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
