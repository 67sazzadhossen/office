"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import useLoadData from "@/Hooks/useLoadData";
import Heading from "../Shared/Heading/Heading";

const PortfolioSection = () => {
  const cards = [0, 1, 2];
  const [data] = useLoadData("portfolio");
  const projects = data?.data?.slice(0, 3);
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const horizontalElement = horizontalRef.current;
    const scrollLength = horizontalElement.scrollWidth - window.innerWidth; // Calculate the scrollable width

    const horizontalScroll = gsap.to(horizontalElement, {
      x: -scrollLength, // Scroll the content to the left
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current, // Trigger when the section enters the viewport
        pin: true, // Pin the section while scrolling horizontally
        scrub: true, // Link the scroll progress to the animation
        start: "top top", // Start horizontal scroll when the top of the section hits the top of the viewport
        end: () => `+=${horizontalElement.scrollWidth}`, // End when the full width of the content is scrolled through
        invalidateOnRefresh: true, // Recalculate on window resize
      },
    });

    // Cleanup: Kill the ScrollTrigger instance on unmount
    return () => {
      if (horizontalScroll.scrollTrigger) {
        horizontalScroll.scrollTrigger.kill(); // Clean up the ScrollTrigger when the component unmounts
      }
    };
  }, [projects?.lenght + 1]);

  return (
    <>
      {/* for deskstop */}
      <div className="lg:min-h-screen text-black">
        {/* Horizontal scrolling section */}

        <h1 className={"sticky top-24 text-center text-3xl font-bold"}>
          Portfolio
        </h1>
        <section
          ref={containerRef}
          className="relative overflow-hidden h-screen hidden lg:block"
        >
          <div
            ref={horizontalRef}
            className="flex space-x-4 h-full items-center px-8"
            style={{ width: "200vw" }} // Make the content wide enough to scroll horizontally
          >
            {/* Horizontal scroll content */}

            {projects?.map((project, index) => (
              <div
                key={index}
                className="w-[50%] card card-compact h-[60%] shadow-xl flex  bg-base-200  text-2xl relative"
              >
                <figure className={"h-3/4 overflow-hidden"}>
                  <Image
                    src={project.url}
                    alt="Shoes"
                    width={1400}
                    height={600}
                  />
                </figure>
                <div className="card-body text-black text-start h-1/3">
                  <h2 className="card-title text-start">{project.name}</h2>
                  <p>{project.description}</p>
                  <ul className={"flex gap-3"}>
                    Technologies :{" "}
                    {project.technologies.map((tech, idx) => (
                      <li className={"list-disc ml-3"} key={idx}>
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/portfolio/${project._id}`}
                    className="btn btn-xs btn-outline absolute right-4 bottom-4"
                  >
                    View details
                  </Link>
                </div>
              </div>
            ))}

            <Link
              href={"/portfolio"}
              className="w-svw card card-compact h-[60%] shadow-xl flex justify-center items-center text-6xl font-extrabold bg-gray-100"
            >
              View All
            </Link>
          </div>
        </section>
      </div>

      {/* for mobile */}

      <div className={"text-center my-12 lg:hidden"}>
        <Heading heading={"Portfolio"}></Heading>
      </div>

      <div className={"lg:hidden flex flex-col gap-16 px-5"}>
        {projects?.map((project, index) => (
          <div
            key={index}
            className=" card card-compact shadow-xl flex  bg-base-200  text-2xl relative"
          >
            <figure className={"overflow-hidden"}>
              <Image src={project.url} alt="Shoes" width={1400} height={600} />
            </figure>
            <div className="card-body text-black text-start ">
              <h2 className="card-title text-start">{project.name}</h2>
              <p>{project.description}</p>
              <ul className={"flex flex-col md:flex-row gap-3"}>
                Technologies :{" "}
                {project.technologies.map((tech, idx) => (
                  <li className={"list-disc ml-3"} key={idx}>
                    {tech}
                  </li>
                ))}
              </ul>

              <Link
                href={`/portfolio/${project._id}`}
                className="btn btn-xs btn-outline md:absolute right-4 bottom-4"
              >
                View details
              </Link>
            </div>
          </div>
        ))}

        <Link href={"/portfolio"} className="btn w-1/2 mx-auto">
          View All
        </Link>
      </div>
    </>
  );
};

export default PortfolioSection;
