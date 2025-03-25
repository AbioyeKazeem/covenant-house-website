// src/pages/home/index.tsx

import Slider from "../../components/slider";
import React, { useEffect, useState } from "react";
import ChurchSection from "../../components/ChurchSection";
import ActivitiesSection from "../../components/ActivitiesSection";
import WorshipExperience from "../../components/WorshipExperience";
import MainLayout from "../../MainLayout";
import PrayerRequest from "../../components/PrayerRequest";

const HomePage: React.FC = () => {
  const [showPrayerRequest, setShowPrayerRequest] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPrayerRequest(true); // Show PrayerRequest when intersecting
        }
      },
      { threshold: 0.5 }
    );

    const activitiesSection = document.getElementById("activities-section");
    if (activitiesSection) {
      observer.observe(activitiesSection);
    }

    return () => {
      if (activitiesSection) {
        observer.unobserve(activitiesSection);
      }
    };
  }, []);

  return (
    <MainLayout>
      <Slider />
      <ChurchSection />
      <ActivitiesSection />
      <WorshipExperience />
      {/* Only renders when showPrayerRequest is true */}
      {showPrayerRequest && <PrayerRequest />}
    </MainLayout>
  );
};

export default HomePage;
