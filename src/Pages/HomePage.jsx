"use client";
import AboutUsSection from "@/Components/HomePageComponents/AboutUsSection";
import HeroSection from "@/Components/HomePageComponents/HeroSection";
import OurServices from "@/Components/HomePageComponents/OurServices";
import PortfolioSection from "@/Components/HomePageComponents/PortfolioSection";
import PricingSection from "@/Components/HomePageComponents/PricingSection";
import MainLayout from "@/Layout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection></HeroSection>
      <OurServices></OurServices>
      <PortfolioSection></PortfolioSection>
      <PricingSection></PricingSection>
      <AboutUsSection></AboutUsSection>
    </MainLayout>
  );
};

export default HomePage;
