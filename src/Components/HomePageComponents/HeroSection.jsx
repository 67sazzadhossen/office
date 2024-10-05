import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import Modal from "../Modals/Modal";

const HeroSection = () => {
  const { isAdmin } = useLoggedUser();
  const [data, refetch] = useLoadData("banner");
  console.log(data?.data[0]);
  return (
    <div className="min-h-screen relative bg-black">
      <div className=" h-screen w-[85%] mx-auto ">
        <div className="flex h-screen  flex-col justify-center">
          {/* ======= description ===== */}
          <h1 className="text-white text-8xl w-2/3 z-40  leading-tight font-bold tracking-wide">
            {data?.data[0].title}
          </h1>

          {isAdmin && (
            <div className={"absolute bottom-16"}>
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

          {/* ========= Image ======= */}

          <div
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              backgroundImage: `url("${data?.data[0].image}}")`,
            }}
            className="h-screen bg-cover bg-no-repeat w-3/4 absolute right-0 bottom-0"
          >
            <div className="h-screen w-full bg-black opacity-60"></div>
          </div>
          <div
            style={{
              clipPath: "polygon(90% 0, 100% 0, 75% 100%, 65% 100%)",
            }}
            className="h-screen w-3/4 absolute bg-black z-10 -left-80"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
