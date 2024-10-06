"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

const PortfolioSection = () => {
  const cards = [0, 1, 2];
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const horizontalElement = horizontalRef.current;
    const scrollLength = horizontalElement.scrollWidth - window.innerWidth; // Calculate the scrollable width
    // Calculate the scrollable width
    // const scrollLength =
    //   horizontalRef.current.children[0].offsetWidth * cards.length -
    //   window.innerWidth; // Calculate the scrollable width
    // console.log(scrollLength);

    // Create the horizontal scrolling animation
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
  }, [cards.length]);

  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Vertical content before the horizontal scroll section */}
        <section className="h-screen flex items-center justify-center bg-green-200">
          <h1 className="text-3xl font-bold">
            Vertical Scroll Before Horizontal Section
          </h1>
        </section>

        {/* Horizontal scrolling section */}
        <section
          ref={containerRef}
          className="relative overflow-hidden h-screen "
        >
          <div
            ref={horizontalRef}
            className="flex space-x-4 h-full items-center"
            style={{ width: "200vw" }} // Make the content wide enough to scroll horizontally
          >
            {/* Horizontal scroll content */}
            <div className={"text-6xl px-36 text-white"}>Portfolio</div>

            {cards.map((card, index) => (
              <div
                key={index}
                className="w-[50%] card card-compact h-[75%] shadow-xl flex justify-center items-center bg-base-200  text-white text-2xl"
              >
                <figure>
                  <Image
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href={"/portfolio"}
              className="w-svw card card-compact h-[75%] shadow-xl flex justify-center items-center text-white text-6xl font-extrabold"
            >
              View All
            </Link>
          </div>
        </section>

        {/* Vertical content after the horizontal scroll section */}
        <section className="h-screen flex items-center justify-center bg-red-200">
          <h1 className="text-3xl font-bold">
            Vertical Scroll After Horizontal Section
          </h1>
        </section>
      </div>
    </>
  );
};

export default PortfolioSection;
