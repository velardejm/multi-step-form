import StepLayout from "../common/StepLayout";
import AddOnCard from "./AddOnCard";

export default function Step3({
  step,
  setStep,
  isMonthly,
  addOns,
  setAddOns,
  addOnsData,
}) {
  return (
    <StepLayout
      title={"Pick add-ons"}
      description={"Add-ons help enhance your gaming experience."}
      next={true}
      back={true}
      step={step}
      setStep={setStep}
    >
      <div className="mt-10">
        {addOnsData.map((item, index) => {
          const { addOn, addOnKey, description, pricing } = item;
          return (
            <AddOnCard
              key={index}
              {...{
                addOns,
                setAddOns,
                isMonthly,
                addOn,
                addOnKey,
                description,
                pricing,
              }}
            />
          );
        })}
      </div>
    </StepLayout>
  );
}
