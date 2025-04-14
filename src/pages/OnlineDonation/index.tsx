import MainLayout from "../../MainLayout";
import StepOne from "../../components/StepOne";
import StepThree from "../../components/StepThree";
import StepTwo from "../../components/StepTwo";
import React, { useState } from "react";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";

const OnlineDonation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    firstFruits: "",
    offering: "",
    buildingFund: "",
    pastorsWivesForum: "",
    // Step 2
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    // Step 3
    frequency: "",
  });

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (data) => {
    const finalData = { ...formData, ...data };
    console.log("Form submitted:", finalData);
    alert("Donation submitted successfully!");
  };

  return (
    <MainLayout>
      <div className=" pt-[43px] pb-[80px] ">
        <HeaderWithBackButton title="ONLINE DONATION" />

        <div className="mt-4">
          {step === 1 && <StepOne onNext={nextStep} />}
          {step === 2 && <StepTwo onNext={nextStep} onPrevious={prevStep} />}
          {step === 3 && (
            <StepThree
              onPrevious={prevStep}
              onSubmit={handleSubmit}
              totalDonation={6000}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default OnlineDonation;
