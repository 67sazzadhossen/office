"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

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

  const { scrollY } = useScroll();
  const SECTION_HEIGHT = 3500;

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [0, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [100, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}% )`;

  const backgroundSize = useTransform(
    scrollY,
    [1, SECTION_HEIGHT + 500],
    ["0%", "100%"]
  );
  const size = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["0%", "100%"]);
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT * 1.3],
    [1, 0]
  );
  // const rotate = useTransform(scrollY, [0, SECTION_HEIGHT + 500], [0, 360]);

  const ParallaxCard = ({ start, end, children }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
      <motion.div ref={ref} style={{ transform, opacity }}>
        {children}
      </motion.div>
    );
  };
  return (
    <div className={"bg-black "}>
      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className={"relative w-full"}
      >
        <motion.div
          className="sticky top-0 h-screen w-full bg-black flex items-center justify-center bg-cente"
          style={{
            clipPath,
            // rotate,
            backgroundSize,
            scale: size,
            opacity,
            // backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/2044px-American_Broadcasting_Company_Logo.svg.png)`,
            // backgroundImage: `url(https://animated-gif-creator.com/images/03/animated-logo-gifs-get-the-best-gif-on-giphy_33.gif)`,

            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className={
              "text-white text-7xl lg:text-[300px] lg:leading-[250px] font-extrabold uppercase text-center font-serif"
            }
          >
            Our Services
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-screen bg-gradient-to-b from-zinc-950/0 to-black" />

        <div className=" flex flex-col gap-10 px-2 lg:px-0 ">
          {services.map((service, idx) => (
            <div className={"flex justify-center lg:flex-col h-screen p-3"}>
              <ParallaxCard key={idx} start={80} end={80} className={" w-full"}>
                <motion.div
                  whileInView={{ opacity: 1, x: 0, repeatDur: 0.5 }} // Animates to full opacity and original Y position
                  initial={{
                    opacity: 0,
                    x: idx % 2 === 0 ? -100 : 100,
                  }} // Starts with hidden state and off-screen
                  transition={{
                    duration: 0.5,
                  }} // Controls the speed of the animation
                  viewport={{ amount: 0.5 }}
                  className={
                    "flex flex-col-reverse lg:flex-row items-center justify-center lg:w-[70%]  lg:mx-auto  h-[60vh] bg-gray-700 bg-opacity-70 p-6 text-white rounded-lg gap-4 relative"
                  }
                >
                  <div className={"lg:w-1/2"}>
                    <h1 className={"font-bold text-3xl"}>{service.name}</h1>
                    <h1>{service.description}</h1>
                    <div>
                      {service.offerings.map((offer, idx) => (
                        <h1 key={idx}>{offer}</h1>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0.7 }}
                    whileInView={{
                      scale: 1.2,
                      repeatDur: 0.5,
                      transition: {
                        duration: 0.5,
                      },
                    }}
                    className={"lg:w-1/2"}
                  >
                    <Image
                      className={
                        "rounded-2xl lg:absolute lg:-right-[2%] lg:top-[50%] lg:-translate-y-[50%] shadow-lg shadow-zinc-600"
                      }
                      src={service.image}
                      alt={service.name}
                      width={600}
                      height={400}
                    />
                  </motion.div>
                </motion.div>
              </ParallaxCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
