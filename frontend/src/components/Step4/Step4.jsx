import StepLayout from "../common/StepLayout";
import SelectedAddOn from "./SelectedAddoOn";

export default function Step4({
  step,
  setStep,
  selectedPlan,
  isMonthly,
  addOns,
  addOnsData,
}) {
  // console.log(addOns);
  // console.log(addOnsData);

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
          <div>
            <div>
              <p>{`${selectedPlan} (${isMonthly ? "Monthly" : "Yearly"})`}</p>
              <a href="#">Change</a>
            </div>
            <p></p>
          </div>

          <hr></hr>

          <div>
            {addOnsData.map((item, index) => {
              const { addOnKey, addOn, pricing, isMonthly } = item;
              if (addOns[addOnKey]) {
                return <SelectedAddOn key={index} {...{ addOn, pricing }} />;
              }
            })}
          </div>
        </div>
      </>
    </StepLayout>
  );
}
