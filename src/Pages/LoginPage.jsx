import React from "react";
import HeroSection from "../sections/HeroSection";
import FeatureSection from "../sections/FeatureSection";
import FAQSection from "../sections/FAQSection";
import FooterSection from "../sections/FooterSection";

function LoginPage() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <FeatureSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default LoginPage;
