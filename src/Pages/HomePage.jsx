"use client";
import HeroSection from "@/Components/HomePageComponents/HeroSection";
import OurServices from "@/components/HomePageComponents/OurServices";
import PortfolioSection from "@/Components/HomePageComponents/PortfolioSection";
import MainLayout from "@/Layout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection></HeroSection>
      <OurServices></OurServices>
      <PortfolioSection></PortfolioSection>
    </MainLayout>
  );
};

export default HomePage;
