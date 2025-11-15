"use client";

import Footer from "@/lib/components/footer/Footer";
import HeroSection from "@/lib/components/homepage/HeroSection";
import { PricingSection } from "@/lib/components/homepage/PricingSection";
import { ServiceSection } from "@/lib/components/homepage/ServiceSection";
import React from "react";

export default function App() {
  return (
    <div  >
      <HeroSection />
      <PricingSection />
      <ServiceSection/>
      <Footer/>
    </div>
  );
}

