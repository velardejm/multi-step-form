import { useState } from "react";
import StepLayout from "../common/StepLayout";
import AddOnCard from "./AddOnCard";

export default function Step3({ step, setStep, isMonthly, setIsMonthly }) {
  const [addOns, setAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  return (
    <StepLayout
      title={"Pick add-ons"}
      description={"Add-ons help enhance your gaming experience."}
      next={true}
      back={true}
      step={step}
      setStep={setStep}
    >
      <>
        <AddOnCard {...{ addOns, setAddOns }} addOnKey={"onlineService"} />
        <AddOnCard {...{ addOns, setAddOns }} addOnKey={"largerStorage"} />
        <AddOnCard {...{ addOns, setAddOns }} addOnKey={"customizableProfile"} />
      </>
    </StepLayout>
  );
}
