"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const ServicesSection = () => {
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

  //   const { scrollY } = useScroll();
  //   const SECTION_HEIGHT = 4000;

  //   const clip1 = useTransform(scrollY, [0, 4000], [0, 0]);
  //   const clip2 = useTransform(scrollY, [0, 4000], [100, 100]);

  //   const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}% )`;

  //   const backgroundSize = useTransform(
  //     scrollY,
  //     [0, SECTION_HEIGHT + 500],
  //     ["0%", "150%"]
  //   );
  //   const opacity = useTransform(
  //     scrollY,
  //     [SECTION_HEIGHT, SECTION_HEIGHT + 500],
  //     [1, 0]
  //   );
  //   const rotate = useTransform(scrollY, [0, SECTION_HEIGHT + 500], [0, 360]);

  //   const ParallaxImg = ({ className, alt, src, start, end }) => {
  //     const ref = useRef(null);

  //     const { scrollYProgress } = useScroll({
  //       target: ref,
  //       offset: [`${start}px end`, `end ${end * -1}px`],
  //     });

  //     const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  //     const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  //     const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  //     const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  //     return (
  //       <motion.img
  //         src={src}
  //         alt={alt}
  //         className={className}
  //         ref={ref}
  //         style={{ transform, opacity }}
  //       />
  //     );
  //   };
  return (
    // <div className={"bg-black text-white sticky"}>
    //   <div
    //     style={{
    //       backgroundImage: `url("https://images.unsplash.com/photo-1475070929565-c985b496cb9f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D")`,
    //     }}
    //     className={" bg-cover bg-no-repeat bg-fixed relative"}
    //   >
    //     {services.map((service, idx) => (
    //       <div
    //         className={
    //           " h-screen flex items-center gap-4 justify-between max-w-[85%] mx-auto sticky"
    //         }
    //       >
    //         <div className={"space-y-4"}>
    //           <h1 className={"text-3xl font-extrabold"}>{service.name}</h1>
    //           <h1>{service.description}</h1>
    //           <div>
    //             {service.offerings.map((offer, idx) => (
    //               <h1>{offer}</h1>
    //             ))}
    //           </div>
    //         </div>
    //         <Image
    //           src={service.image}
    //           height={600}
    //           width={800}
    //           alt={service.name}
    //         ></Image>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    // <div className={"bg-black"}>
    //   <div
    //     style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    //     className={"relative w-full"}
    //   >
    //     <motion.div
    //       className="sticky top-0 h-screen w-full text-8xl text-white"
    //       style={{
    //         clipPath,
    //         // rotate,
    //         backgroundSize,
    //         opacity,
    //         backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/2044px-American_Broadcasting_Company_Logo.svg.png)`,
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     ></motion.div>
    //     {/* <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" /> */}

    //     <div className="mx-auto max-w-5xl px-4 pt-[200px]">
    //       <ParallaxImg
    //         src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="And example of a space launch"
    //         start={200}
    //         end={100}
    //         className=""
    //       />
    //       <ParallaxImg
    //         src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="An example of a space launch"
    //         start={400}
    //         end={200}
    //         className=""
    //       />
    //       <ParallaxImg
    //         src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="Orbiting satellite"
    //         start={600}
    //         end={200}
    //         className=""
    //       />
    //       <ParallaxImg
    //         src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="Orbiting satellite"
    //         start={800}
    //         end={200}
    //         className=""
    //       />
    //     </div>
    //   </div>
    // </div>

    <div>services</div>
  );
};

export default ServicesSection;
