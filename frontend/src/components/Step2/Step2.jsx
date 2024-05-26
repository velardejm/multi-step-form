import { useState } from "react";
import StepLayout from "../common/StepLayout";
import PlanCard from "./PlanCard";
import SubscriptionTypeSwitch from "./SubscriptionTypeSwitch";

export default function Step2({ step, setStep, isMonthly, setIsMonthly }) {
  // const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("arcade");

  return (
    <StepLayout
      title={"Select your plan"}
      description={"You have the option of monthly or yearly billing."}
      next={true}
      back={true}
      step={step}
      setStep={setStep}
    >
      <>
        <div className="flex flex-col justify-between h-72 pt-5">
          <div className="flex justify-between">
            <PlanCard
              plan={"Arcade"}
              icon={"icon-arcade.svg"}
              pricing={["9", "90"]}
              {...{ isMonthly, selectedPlan, setSelectedPlan }}
            />
            <PlanCard
              plan={"Advanced"}
              icon={"icon-advanced.svg"}
              pricing={["12", "120"]}
              {...{ isMonthly, selectedPlan, setSelectedPlan }}
            />
            <PlanCard
              plan={"Pro"}
              icon={"icon-pro.svg"}
              pricing={["15", "150"]}
              {...{ isMonthly, selectedPlan, setSelectedPlan }}
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
