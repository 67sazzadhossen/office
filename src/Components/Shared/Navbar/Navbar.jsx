"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import Modal from "@/Components/Modals/Modal";
import { animate, motion } from "framer-motion";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  const { user, isAdmin, status } = useLoggedUser();
  // console.log(user, isAdmin, status);

  const authenticated = status === "authenticated";
  const [data, refetch] = useLoadData("navbar");
  // console.log(data.data[0]);

  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  const closeDropdown = (e) => {
    // Close the dropdown only if clicking outside of it
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setClicked(false);
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

  return (
    <motion.div
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
        transition: {
          duration: 0.3,
        },
      }}
      className="fixed w-full z-[9999]"
    >
      {/* <nav className="">
        <div className=" flex justify-between">
          {data && (
            <div className={""}>
              <SideMenu links={links}></SideMenu>
              <Image
                src={data?.data[0]?.image}
                width={60}
                height={60}
                alt="logo"
              ></Image>
            </div>
          )}
          {isAdmin && (
            <Modal
              apiName="navbar"
              buttonName={"Update Navbar"}
              id={"updateNavModal"}
              loadedImage={data?.data[0]?.image}
              refetch={refetch}
              heading={"Customize Your Logo"}
            ></Modal>
          )}
        </div>
        <div>
          <ul className="">
            {links.map((link, idx) => (
              <Link key={idx} href={link.path}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="">
          {authenticated ? (
            <div>
              <div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={1}
                    role="button"
                    className="btn btn-ghost rounded-btn"
                    onClick={toggleDropdown} // Toggling dropdown visibility
                    // Close the dropdown when clicking outside
                  >
                    <Image
                      className={"rounded-full"}
                      src={user.image}
                      width={50}
                      height={50}
                      alt={"profile"}
                    ></Image>
                  </div>
                  {isOpen && (
                    <ul onBlur={closeDropdown} className="">
                      <p>{user.name}</p>
                      <p>{user.email}</p>

                      <button className={""} onClick={signOut}>
                        Logout
                      </button>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <Link href={"/login"}>Login</Link>
              <Link href={"/sign-up"}>Sign Up</Link>
            </div>
          )}
        </div>
      </nav> */}

      <motion.nav
        className={
          "fixed flex justify-between items-center px-2 lg:px-10 py-3 w-full  z-50  text-black"
        }
      >
        <motion.div
          variants={{
            open: {
              height: "80vh", // Set the target height
              y: "calc(40vh - 40px)",
              transition: {
                duration: 0.5,
              },
            },
            closed: {
              height: "60px",
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          style={{ transformOrigin: "bottom" }} // Apply transformOrigin directly as a style
          className={
            "absolute  bg-slate-100 w-full left-0 z-40 bg-opacity-40 backdrop-blur-xl rounded-b-2xl "
          }
        >
          <motion.ul
            className={
              "h-full w-full flex justify-center items-center flex-col gap-12 text-xl lg:text-3xl absolute"
            }
          >
            {links.map((link, idx) => (
              <motion.li
                initial={{ opacity: 0 }}
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    pointerEvents: "auto", // Enable clicking when open
                    transition: {
                      delay: idx * 0.1, // Stagger open animation
                      type: "spring",
                      stiffness: 80,
                    },
                  },
                  closed: {
                    y: "40vh",
                    opacity: 0,
                    pointerEvents: "none", // Disable clicking when closed
                    transition: {
                      delay: (links.length - idx) * 0.05, // Reverse stagger for closing
                    },
                  },
                }}
                key={idx}
              >
                <Link onClick={closeDropdown} href={link.path}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <Link
          href={"/"}
          className={
            "text-xl lg:text-3xl font-extrabold tracking-tighter uppercase z-50"
          }
        >
          Web Innovators
        </Link>

        {/* =========== Toggle Button ======= */}
        <div className={"z-50 flex items-center gap-4"}>
          <div className="relative" ref={dropdownRef}>
            {authenticated ? (
              <motion.div className={"relative "}>
                <motion.div
                  onClick={() => setClicked(!clicked)}
                  className="mask mask-squircle w-8 "
                >
                  <Image
                    className={""}
                    src={user.image}
                    width={50}
                    height={50}
                    alt={"profile"}
                  />
                </motion.div>
                <motion.div
                  animate={clicked ? "open" : "closed"}
                  initial={"closed"}
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
                  className={
                    " shadow-md text-black bg-white bg-opacity-60 absolute right-[50%] translate-x-[50%] top-[150%] p-6 rounded-xl space-y-2 text-center"
                  }
                >
                  <h1>{user.name}</h1>
                  <h1>{user.email}</h1>
                  <button
                    className={"btn btn-sm w-full"}
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Log Out
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href={"/login"} className={"flex gap-2 items-center "}>
                  {/* <IoMdLogIn></IoMdLogIn> */}
                  <button className={"btn btn-xs rounded-full"}>Login</button>
                </Link>
                <Link href={"/sign-up"} className={"flex gap-2 items-center"}>
                  {/* <IoMdLogIn></IoMdLogIn> */}
                  <button className={"btn btn-xs rounded-full"}>Sign Up</button>
                </Link>
              </div>
            )}
          </div>

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
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
