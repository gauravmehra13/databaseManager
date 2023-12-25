import React from "react";
import DataTable from "../components/DataTable";
import HeroSection from "../components/HeroSection";

const LandingPage = ({ styleMode, toggleMode }) => {
  return (
    <div>
      <HeroSection />
      <DataTable styleMode={styleMode} toggleMode={toggleMode} />
    </div>
  );
};

export default LandingPage;
