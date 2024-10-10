"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <motion.div
        tabIndex={0} // Make the div focusable
        onBlur={closeDropdown}
        onClick={toggleDropdown}
        animate={isOpen ? "open" : "closed"}
        className={"space-y-1"}
      >
        <motion.div
          variants={{
            open: {
              y: 6,
              rotate: "-45deg",
            },
            closed: {
              y: 0,
              rotate: 0,
            },
          }}
          className={"h-[2px] w-5 bg-black rounded-full"}
        ></motion.div>
        <motion.div
          variants={{
            open: {
              opacity: 0,
              rotate: "45deg",
            },
            closed: {
              opacity: 1,
              rotate: 0,
            },
          }}
          className={"h-[2px] w-5 bg-black rounded-full"}
        ></motion.div>
        <motion.div
          variants={{
            open: {
              y: -6,
              rotate: "45deg",
            },
            closed: {
              y: 0,
              rotate: 0,
            },
          }}
          className={"h-[2px] w-5 bg-black rounded-full"}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default ToggleButton;
