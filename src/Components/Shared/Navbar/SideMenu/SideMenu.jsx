import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const SideMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div className={"lg:hidden"}>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        tabIndex={0} // Make the div focusable
        onBlur={closeDropdown}
        onClick={toggleDropdown}
        className={"relative h-12 w-12 rounded-full z-10"}
      >
        {/* Toggle button */}
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
          className={"bg-black w-6 h-[3px] absolute rounded-full z-10"}
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
          className={"bg-black w-6 h-[3px] absolute rounded-full z-10"}
        ></motion.span>
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
          className={"bg-black w-5 h-[3px] absolute rounded-full z-10"}
        ></motion.span>

        {/* Navigation title */}
        <motion.div
          variants={{
            open: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 80,
              },
            },
            closed: {
              y: -500,
              opacity: 0,
              transition: {
                type: "spring",
                stiffness: 80,
              },
            },
          }}
          className={"absolute  z-10 -bottom-8 text-black"}
        >
          Navigation
        </motion.div>
        <motion.div
          variants={{
            open: {
              x: 0,
              width: "295px",
              transition: {
                delay: 0.6,
                type: "spring",
                stiffness: 80,
              },
            },
            closed: {
              x: -500,
              width: "0px",
              transition: {
                type: "spring",
                stiffness: 80,
              },
            },
          }}
          className={"absolute h-[2px] bg-black z-10 -bottom-10 text-black"}
        ></motion.div>

        {/* Toggle Menu */}
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className={"bg-white absolute "}
          variants={{
            open: {
              height: "100vh",
              width: "300px",
              borderRadius: "0",
              scale: 1.1,
              transition: {
                type: "spring",
                stiffness: 80,
              },
            },
            closed: {
              height: "48px",
              width: "48px",
              borderRadius: "30px",
              scale: 1.1,
              transition: {
                delay: 0.3,
                type: "spring",
                stiffness: 80,
              },
            },
          }}
        >
          <motion.ul
            animate={isOpen ? "open" : "closed"}
            className={
              "text-black absolute text-center top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-3xl space-y-4"
            }
          >
            {links.map((link, idx) => (
              <motion.li
                onClick={toggleDropdown}
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: idx * 0.1, // Stagger open animation
                      type: "spring",
                      stiffness: 80,
                    },
                  },
                  closed: {
                    y: -500,
                    opacity: 0,
                    transition: {
                      delay: (links.length - idx) * 0.05, // Reverse stagger for closing
                    },
                  },
                }}
                key={idx}
                className={""}
              >
                <Link href={link.path}>{link.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SideMenu;
