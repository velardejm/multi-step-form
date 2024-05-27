import { useState } from "react";
import StepLayout from "../common/StepLayout";

export default function Step4({ step, setStep }) {

  return (
    <StepLayout
      title={"Finishing up"}
      description={"Double-check everything looks OK before confirming."}
      confirm={true}
      back={true}
      step={step}
      setStep={setStep}
    >
      <>
        <div>
          <p></p>
        </div>
      </>
    </StepLayout>
  );
}
