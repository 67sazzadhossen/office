import OurServices from "@/Components/HomePageComponents/OurServices";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <MainLayout>
        <div className={"min-h-screen mb-52"}>
          <OurServices></OurServices>
        </div>
      </MainLayout>
    </div>
  );
};

export default ServicePage;
