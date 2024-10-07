import { motion } from "framer-motion";
import { useState } from "react";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      onClick={toggleDropdown}
      className={"relative bg-white h-12 w-12 rounded-full"}
    >
      <motion.span
        style={{
          left: "50%",
          top: "35%",
          x: "-50%",
          y: "-35%",
        }}
        variants={{
          open: {
            y: 8,
            rotate: "-45deg",
          },
          closed: {
            y: 0,
            rotate: 0,
          },
        }}
        className={"bg-black w-6 h-[3px] absolute rounded-full"}
      ></motion.span>
      <motion.span
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
          open: {
            rotate: "45deg",
          },
          closed: {
            rotate: "0deg",
          },
        }}
        className={"bg-black w-6 h-[3px] absolute rounded-full"}
      ></motion.span>
      {/* <motion.span
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
          open: {
            rotate: "-45deg",
            opacity: 1,
          },
          closed: {
            rotate: "0deg",
            opacity: 0,
          },
        }}
        className={"bg-black w-10 h-1 absolute rounded-full"}
      ></motion.span> */}
      <motion.span
        style={{
          left: "calc(50% + 1.5px)",
          top: "60%",
          x: "-50%",
          y: "35%",
        }}
        variants={{
          open: {
            opacity: 0,
            y: -8,
            rotate: "45deg",
          },
          closed: {
            opacity: 1,
            y: 0,
          },
        }}
        className={"bg-black w-5 h-[3px] absolute rounded-full"}
      ></motion.span>
    </motion.div>
  );
};

export default SideMenu;
