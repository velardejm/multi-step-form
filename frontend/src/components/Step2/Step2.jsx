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
        <div className="flex flex-col justify-between h-72 pt-5">
          <div className="flex justify-between">
            <PlanCard
              isMonthly={isMonthly}
              plan={"Arcade"}
              icon={"icon-arcade.svg"}
              pricing={["9", "90"]}
            />
            <PlanCard
              isMonthly={isMonthly}
              plan={"Advanced"}
              icon={"icon-advanced.svg"}
              pricing={["12", "120"]}
            />
            <PlanCard
              isMonthly={isMonthly}
              plan={"Pro"}
              icon={"icon-pro.svg"}
              pricing={["15", "150"]}
            />
          </div>

          <div>
            <SubscriptionTypeSwitch {...{ isMonthly, setIsMonthly }} />
          </div>
        </div>
      </>
    </StepLayout>
  );
}
