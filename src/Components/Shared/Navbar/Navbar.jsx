"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import Modal from "@/Components/Modals/Modal";

const Navbar = () => {
  const { user, isAdmin, status } = useLoggedUser();
  console.log(user, isAdmin, status);

  const authenticated = status === "authenticated";
  const [data, refetch] = useLoadData("navbar");
  // console.log(data.data[0]);

  return (
    <div className="">
      <nav className="flex z-50 justify-between items-center px-40 py-4 bg-black bg-opacity-50 backdrop-blur-2xl fixed text-white w-full">
        <div className="flex items-center gap-4">
          <Image
            src={data?.data[0]?.image}
            width={60}
            height={60}
            alt="logo"
          ></Image>
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
          <ul className="flex items-center gap-16">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/portfolio"}>Portfolio</Link>
            <Link href={"/contact"}>Contact</Link>
          </ul>
        </div>
        <div className="">
          {authenticated ? (
            <button onClick={signOut}>Logout</button>
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
