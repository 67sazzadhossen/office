"use client";
import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import Modal from "../Modals/Modal";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { isAdmin } = useLoggedUser();
  const [data, refetch] = useLoadData("banner");
  // console.log(data?.data[0]);
  return (
    <div
      className={
        "min-h-screen flex justify-center items-center bg-no-repeat bg-cover bg-[url('')] bg-opacity-50 relative overflow-hidden"
      }
    >
      <motion.div
        initial={{ opacity: 0.2, rotateX: "45deg" }}
        animate={{
          opacity: 1,
          scaleX: 1.6,
          scaleY: 1.3,

          rotateX: "-45deg",

          transition: {
            type: "tween",
            stiffness: 180,
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className={"absolute z-0 h-[300px] md:h-[600px] w-full "}
      >
        <Image
          src={"https://i.ibb.co/Y23YNzX/Ripple.png"}
          layout={"fill"}
          alt={"background"}
        ></Image>
      </motion.div>

      <div
        className={
          "flex flex-col-reverse lg:flex-row items-center lg:gap-24 lg:max-w-[80%] lg:mx-auto px-3 lg:px-0 z-10"
        }
      >
        <div className={"w-full lg:w-2/3 space-y-4"}>
          <h1 className={"lg:text-5xl text-2xl font-bold leading-snug"}>
            {data?.data[0].title}
          </h1>
          <button className={"btn btn-outline"}>Start a project with us</button>
          {isAdmin && (
            <div className={"lg:absolute mt-6 lg:mt-0 bottom-16 z-10"}>
              <Modal
                apiName="banner"
                buttonName={"Update Banner"}
                id={"updateBannerModal"}
                loadedImage={data?.data[0]?.image}
                loadedTitle={data?.data[0]?.title}
                refetch={refetch}
                heading={"Customize Your Banner"}
                input={["description"]}
              ></Modal>
            </div>
          )}
        </div>
        <div className={"lg:w-2/3 "}>
          <Image
            className={"rounded-3xl "}
            src={
              "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/335c79145455835.629ef2634f695.png"
            }
            alt={"Hero Image"}
            width={1200}
            height={600}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
