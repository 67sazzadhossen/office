"use client";
import HeroSection from "@/Components/HomePageComponents/HeroSection";
import PortfolioSection from "@/Components/HomePageComponents/PortfolioSection";
import MainLayout from "@/Layout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection></HeroSection>
      {/* <ServicesSection></ServicesSection> */}
      <PortfolioSection></PortfolioSection>
    </MainLayout>
  );
};

export default HomePage;
