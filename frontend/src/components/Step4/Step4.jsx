import StepLayout from "../common/StepLayout";
import SelectedAddOn from "./SelectedAddOn";

export default function Step4({
  step,
  setStep,
  selectedPlan,
  isMonthly,
  addOns,
  addOnsData,
  amountTotals,
}) {
  const [planTotal, addOnsTotal, total] = amountTotals;

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
          <div className="flex justify-between items-center">
            <div>
              <p>{`${selectedPlan} (${isMonthly ? "Monthly" : "Yearly"})`}</p>
              <a href="#">Change</a>
            </div>
            <p>{`$${planTotal}/${isMonthly ? "mo" : "yr"}`}</p>
          </div>

          <hr></hr>

          <div>
            {addOnsData.map((item, index) => {
              const { addOnKey, addOn, pricing } = item;
              if (addOns[addOnKey]) {
                return (
                  <SelectedAddOn
                    key={index}
                    {...{ addOn, pricing, isMonthly }}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="flex justify-between">
          <p>{`Total (per ${isMonthly ? "month" : "year"})`} </p>
          <p>{`$${total}/${isMonthly ? "mo" : "yr"}`}</p>
        </div>
      </>
    </StepLayout>
  );
}
