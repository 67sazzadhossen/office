"use client";
import HeroSection from "@/Components/HomePageComponents/HeroSection";
import PortfolioSection from "@/Components/HomePageComponents/PortfolioSection";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection></HeroSection>
      <PortfolioSection></PortfolioSection>
    </MainLayout>
  );
};

export default HomePage;
