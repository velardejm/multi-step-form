import { useState } from "react";
import StepLayout from "../common/StepLayout";

export default function Step4({ step, setStep }) {

  return (
    <StepLayout
      title={"Pick add-ons"}
      description={"Add-ons help enhance your gaming experience."}
      confirm={true}
      back={true}
      step={step}
      setStep={setStep}
    >
      <>
        <h1>Step 4</h1>
      </>
    </StepLayout>
  );
}
