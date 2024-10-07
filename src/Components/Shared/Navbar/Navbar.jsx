"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import Modal from "@/Components/Modals/Modal";
import SideMenu from "./SideMenu/SideMenu";

const Navbar = () => {
  const { user, isAdmin, status } = useLoggedUser();
  console.log(user, isAdmin, status);

  const authenticated = status === "authenticated";
  const [data, refetch] = useLoadData("navbar");
  // console.log(data.data[0]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="">
      <nav className="flex z-50 justify-between items-center  py-4 bg-black bg-opacity-50 backdrop-blur-2xl fixed text-white w-full px-4 lg:px-40 text-sm sm:text-base">
        <div className="flex flex-col lg:flex-row lg:gap-4 items-center">
          {data && (
            <div className={"flex gap-2 items-center"}>
              <SideMenu></SideMenu>
              <Image
                src={data?.data[0]?.image}
                width={60}
                height={60}
                alt="logo"
              ></Image>
            </div>
          )}
          {isAdmin && (
            // <UpdateNavbarModal
            //   logo={logo}
            //   navRefetch={refetch}
            // ></UpdateNavbarModal>

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
          <ul className="hidden lg:flex items-center gap-16">
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
                    tabIndex={0}
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
                    <ul
                      onBlur={closeDropdown}
                      tabIndex={0}
                      className="menu dropdown-content text-black bg-base-100 rounded-box z-[1] mt-4 p-4 shadow text-center space-y-2"
                    >
                      <p>{user.name}</p>
                      <p>{user.email}</p>

                      <button
                        className={"btn btn-error text-white"}
                        onClick={signOut}
                      >
                        Logout
                      </button>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <Link href={"/login"}>Login</Link>
              <Link href={"/sign-up"}>Sign Up</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
