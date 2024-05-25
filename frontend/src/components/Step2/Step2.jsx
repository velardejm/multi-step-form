import { useState } from "react";
import StepLayout from "../common/StepLayout";
import PlanCard from "./PlanCard";
import SubscriptionTypeSwitch from "./SubscriptionTypeSwitch";
import { handleNext, handleBack } from "../../utils/buttonHandlers";

export default function Step2({ step, setStep }) {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <StepLayout
      title={"Select your plan"}
      description={"You have the option of monthly or yearly billing."}
      next={true}
      back={true}
      handleNext={() => handleNext(step, setStep)}
      handleBack={() => handleBack(step, setStep)}
    >
      <>
        <p>Step 2</p>
        <div className="flex flex-col justify-between bg-blue-300 h-[300px]">
          <div className="flex justify-between">
            <PlanCard isMonthly={isMonthly} />
            <PlanCard isMonthly={isMonthly} />
            <PlanCard isMonthly={isMonthly} />
          </div>

          <div>
            <SubscriptionTypeSwitch {...{ isMonthly, setIsMonthly }} />
          </div>
        </div>
      </>
    </StepLayout>
  );
}
