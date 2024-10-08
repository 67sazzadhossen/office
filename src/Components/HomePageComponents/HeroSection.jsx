import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import Modal from "../Modals/Modal";

const HeroSection = () => {
  const { isAdmin } = useLoggedUser();
  const [data, refetch] = useLoadData("banner");
  console.log(data?.data[0]);
  return (
    <div className="min-h-screen relative bg-black">
      <div className=" h-screen lg:max-w-[85%] mx-auto px-4 lg:px-0">
        <div className="flex h-screen flex-col justify-center">
          {/* ======= description ===== */}
          <div className=" w-3/4 lg:w-2/3 z-40 ">
            <h1
              className={
                "text-white text-3xl lg:text-[3rem] leading-tight font-serif tracking-wider"
              }
            >
              {data?.data[0].title}
            </h1>
            <div className={"btn btn-outline text-white mt-3"}>
              Tell us what you have in mind
            </div>
          </div>

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

          {/* ========= Image for large devices ======= */}

          <div
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              backgroundImage: `url("${data?.data[0].image}}")`,
            }}
            className="h-screen bg-cover bg-no-repeat w-3/4 hidden lg:block absolute right-0 bottom-0 "
          >
            <div className="h-screen w-full bg-black opacity-60"></div>
          </div>
          <div
            style={{
              clipPath: "polygon(90% 0, 100% 0, 75% 100%, 65% 100%)",
            }}
            className="h-screen w-3/4 hidden lg:block absolute bg-black z-10 -left-80"
          ></div>
        </div>
      </div>

      {/* ========= imgae for small devices ========= */}
      <div
        style={{ backgroundImage: `url("${data?.data[0].image}}")` }}
        className={
          "h-screen absolute w-full bg-red-400 top-0 bg-no-repeat bg-cover z-0 lg:hidden"
        }
      >
        <div className="h-screen w-full bg-black opacity-50"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-black" />
    </div>
  );
};

export default HeroSection;
