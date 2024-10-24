"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, isAdmin, status } = useLoggedUser();

  const authenticated = status === "authenticated";
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // Function to close the navbar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false); // Close the dropdown
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.3 } }}
      className="fixed w-full z-[9999]"
    >
      <motion.nav className="fixed flex justify-between items-center px-2 lg:px-10 py-3 w-full  z-50  text-black">
        <motion.div
          variants={{
            open: {
              height: "80vh",
              y: "calc(40vh - 40px)",
              transition: { duration: 0.5 },
            },
            closed: {
              height: "60px",
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          style={{ transformOrigin: "bottom" }}
          className="absolute bg-slate-100 w-full left-0 z-40 bg-opacity-40 backdrop-blur-xl rounded-b-2xl"
        >
          <motion.ul className="h-full w-full flex justify-center items-center flex-col gap-12 text-xl lg:text-3xl absolute">
            {links.map((link, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0 }}
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    pointerEvents: "auto",
                    transition: {
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 80,
                    },
                  },
                  closed: {
                    y: "40vh",
                    opacity: 0,
                    pointerEvents: "none",
                    transition: {
                      delay: (links.length - idx) * 0.05,
                    },
                  },
                }}
              >
                <Link onClick={handleLinkClick} href={link.path}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <Link
          href="/"
          className="text-xl lg:text-3xl font-extrabold tracking-tighter uppercase z-50"
        >
          Web Innovators
        </Link>

        <div className="z-50 flex items-center gap-4">
          <div className="relative" ref={dropdownRef}>
            {authenticated ? (
              <motion.div className="relative">
                <motion.div
                  onClick={() => setClicked(!clicked)}
                  className="mask mask-squircle w-8"
                >
                  <Image
                    className=""
                    src={user.image}
                    width={50}
                    height={50}
                    alt="profile"
                  />
                </motion.div>
                <motion.div
                  animate={clicked ? "open" : "closed"}
                  initial="closed"
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      x: 50,
                      transition: {
                        type: "spring",
                        stiffness: 50,
                        duration: 0.1,
                      },
                    },
                    closed: {
                      y: "100vh",
                      opacity: 0,
                      x: 50,
                      transition: {
                        type: "spring",
                        stiffness: 50,
                        duration: 0.1,
                      },
                    },
                  }}
                  className="shadow-md text-black bg-white bg-opacity-60 absolute right-[50%] translate-x-[50%] top-[150%] p-6 rounded-xl space-y-2 text-center"
                >
                  <h1>{user.name}</h1>
                  <h1>{user.email}</h1>
                  <button className="btn btn-sm w-full" onClick={signOut}>
                    Log Out
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login" className="flex gap-2 items-center">
                  <button className="btn btn-xs rounded-full">Login</button>
                </Link>
                <Link href="/sign-up" className="flex gap-2 items-center">
                  <button className="btn btn-xs rounded-full">Sign Up</button>
                </Link>
              </div>
            )}
          </div>

          <motion.div
            tabIndex={0}
            onClick={toggleDropdown}
            animate={isOpen ? "open" : "closed"}
            className="space-y-1"
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
              className="h-[2px] w-5 bg-black rounded-full"
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
              className="h-[2px] w-5 bg-black rounded-full"
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
              className="h-[2px] w-5 bg-black rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
