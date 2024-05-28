import { useState } from "react";
import StepLayout from "../common/StepLayout";
import PlanCard from "./PlanCard";
import SubscriptionTypeSwitch from "./SubscriptionTypeSwitch";

export default function Step2({
  step,
  setStep,
  isMonthly,
  setIsMonthly,
  selectedPlan,
  setSelectedPlan,
  plansData,
  updateTotals
}) {

  return (
    <StepLayout
      title={"Select your plan"}
      description={"You have the option of monthly or yearly billing."}
      next={true}
      back={true}
      step={step}
      setStep={setStep}
      updateTotals={updateTotals}
    >
      <>
        <div className="flex flex-col justify-between h-72 pt-5">
          <div className="flex justify-between">
            {plansData.map((item, index) => {
              const { plan, pricing, icon } = item;
              return (
                <PlanCard
                  key={index}
                  {...{
                    plan,
                    pricing,
                    icon,
                    isMonthly,
                    selectedPlan,
                    setSelectedPlan,
                  }}
                />
              );
            })}
          </div>

          <div>
            <SubscriptionTypeSwitch {...{ isMonthly, setIsMonthly }} />
          </div>
        </div>
      </>
    </StepLayout>
  );
}
