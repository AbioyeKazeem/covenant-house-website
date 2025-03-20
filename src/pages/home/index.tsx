import Slider from "../../components/slider";
import Header from "../../components/header";
import React from "react";
import ChurchSection from "../../components/ChurchSection";
import ActivitiesSection from "../../components/ActivitiesSection";
import WorshipExperience from "../../components/WorshipExperience";
import Footer from "../../components/footer";

const HomePage = () => {
  return (
    <div className="max-w-[1380px] mx-auto">
      <Header />
      <Slider />
      <ChurchSection />
      <ActivitiesSection />
      <WorshipExperience />
      <Footer />
    </div>
  );
};

export default HomePage;
